// Choose the CanvasKit renderer once, before Flutter loads, so the offline
// worker installs the same one. These are Flutter's own Chromium-variant checks;
// the Chromium build is about 30% smaller than the full renderer.
window.rateVaultCanvasKitVariant = (() => {
  try {
    const blink = navigator.vendor === 'Google Inc.' || navigator.userAgent.includes('Edg/');
    return blink && typeof ImageDecoder !== 'undefined' &&
      typeof Intl.v8BreakIterator !== 'undefined' && typeof Intl.Segmenter !== 'undefined'
      ? 'chromium' : 'full';
  } catch (_) {
    return 'full';
  }
})();
(() => {
  const loading = document.getElementById('startup');
  const message = document.getElementById('startup-message');
  const retry = document.getElementById('startup-retry');
  const essentialScripts = new Set(['flutter_bootstrap.js', 'main.dart.js']
    .map(path => new URL(path, document.baseURI).href));
  const timer = setTimeout(() => fail('Startup is taking longer than expected. Check your connection and try again.'), 30000);
  let complete = false;
  function fail(text) {
    if (complete) return;
    clearTimeout(timer);
    loading.dataset.state = 'error';
    message.textContent = text;
    retry.hidden = false;
  }
  retry.addEventListener('click', () => location.reload());
  window.rateVaultStartup = {
    fail: () => fail('RateVault could not start. Check your connection and try again.'),
    ready: () => {
      complete = true;
      clearTimeout(timer);
      loading.remove();
    },
  };
  // Script.src is an absolute URL resolved against the page's base URI.
  // Include Flutter's dynamic entrypoint, but keep optional script failures
  // (such as analytics or offline saving) out of the startup recovery UI.
  window.addEventListener('error', (event) => {
    if (event.target?.tagName === 'SCRIPT' && essentialScripts.has(event.target.src)) {
      window.rateVaultStartup.fail();
    }
  }, true);
})();
