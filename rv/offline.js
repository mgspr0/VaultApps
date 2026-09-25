// A small bridge shares worker readiness with Flutter without delaying startup.
(() => {
  let state = 'checking';
  let registration;
  let started = false;
  let busy = false;
  let inspection = 0;
  const listeners = new Set();
  const publish = next => {
    if (state === next) return;
    state = next;
    for (const listener of listeners) listener(state);
  };
  function ask(worker, type) {
    return new Promise((resolve, reject) => {
      const channel = new MessageChannel();
      const finish = (error, value) => {
        clearTimeout(timer);
        channel.port1.close();
        if (error) reject(error); else resolve(value);
      };
      const timer = setTimeout(() => finish(new Error('Offline check timed out')), 35000);
      channel.port1.onmessage = event => finish(null, event.data.complete === true);
      try { worker.postMessage({ type }, [channel.port2]); }
      catch (error) { finish(error); }
    });
  }
  async function inspect() {
    const revision = ++inspection;
    if (registration.waiting) return publish('update');
    if (registration.installing) return publish(registration.active ? 'update-downloading' : 'downloading');
    if (!registration.active) return publish('failed');
    try {
      const ready = await ask(registration.active, 'RATEVAULT_STATUS');
      if (revision === inspection) publish(ready ? 'available' : 'failed');
    } catch (_) { if (revision === inspection) publish('failed'); }
  }
  function watch(worker) {
    if (!worker) return;
    worker.addEventListener('statechange', () => {
      if (worker.state === 'redundant') {
        inspection++;
        publish(registration.active ? 'update-failed' : 'failed');
      } else { void inspect(); }
    });
  }
  async function connect() {
    if (busy) return;
    if (!('serviceWorker' in navigator) || !window.isSecureContext) return publish('unsupported');
    busy = true;
    publish('downloading');
    try {
      const next = await navigator.serviceWorker.register(new URL('ratevault-worker.js', document.baseURI), {
        scope: new URL('./', document.baseURI).pathname, updateViaCache: 'none',
      });
      if (registration !== next) {
        registration = next;
        registration.addEventListener('updatefound', () => { watch(registration.installing); void inspect(); });
        watch(registration.installing);
      }
      await inspect();
    } catch (_) { publish('failed'); }
    finally { busy = false; }
  }
  async function retry() {
    if (busy) return;
    if (!registration?.active) return connect();
    busy = true;
    const updateFailed = state === 'update-failed';
    publish(updateFailed ? 'update-downloading' : 'downloading');
    try {
      if (!updateFailed) {
        // A deployed update may be the only way to recover an evicted old file.
        await ask(registration.active, 'RATEVAULT_REPAIR').catch(() => false);
      }
      await registration.update();
      await inspect();
    } catch (_) { publish(updateFailed ? 'update-failed' : 'failed'); }
    finally { busy = false; }
  }
  window.rateVaultOffline = {
    subscribe(listener) { listeners.add(listener); listener(state); },
    unsubscribe(listener) { listeners.delete(listener); },
    retry,
    start() {
      if (started) return;
      started = true;
      navigator.serviceWorker?.addEventListener('controllerchange', () => { if (registration) void inspect(); });
      navigator.serviceWorker?.addEventListener('message', event => {
        if (event.data?.type === 'RATEVAULT_OFFLINE_CHANGED' && registration) void inspect();
      });
      window.addEventListener('online', () => { if (state === 'failed' || state === 'update-failed') void retry(); });
      window.addEventListener('pageshow', () => { if (registration) void inspect(); });
      void connect();
    },
  };
})();
