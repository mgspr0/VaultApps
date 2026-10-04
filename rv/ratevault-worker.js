const CACHE_PREFIX = "ratevault:/rv/:";
const CACHE_NAME = "ratevault:/rv/:04059042aaee727dbd6e864f";
const ASSETS = [{"url":"assets/AssetManifest.bin","sha256":"27bd5d67aad495bbbac43dbac433320f062a246b3a2141fedb5097cf8e219e8a"},{"url":"assets/AssetManifest.bin.json","sha256":"74caac08e4571d64e1d74aa8f58b3bc5dc74b77a3eb71da7859a51584592837c"},{"url":"assets/FontManifest.json","sha256":"b283507b36b990bec3ebeaf814f68fe7f6bba292c2bc860dc5465688accd1a41"},{"url":"assets/NOTICES","sha256":"0bcd3f88f0dceff9ad641111057d6dfd0899b32030a682d1acdb8c2fe6d82c6c"},{"url":"assets/assets/fonts/EMOJI-OFL.txt","sha256":"6a73f9541c2de74158c0e7cf6b0a58ef774f5a780bf191f2d7ec9cc53efe2bf2"},{"url":"assets/assets/fonts/NOTO-OFL.txt","sha256":"0dab92d0544f7b233403f14b84a663bdbfa746982eda629e7f4f9ffe1b036feb"},{"url":"assets/assets/fonts/NotoSans-RateVault.ttf","sha256":"3dc1fe0711e6e906bcfc519d6169aff6df9dc4170a0cacbd3aca6b7f0d9a246a"},{"url":"assets/assets/fonts/NotoSansArabic-RateVault.ttf","sha256":"deb43a7d8e2c0a91f929811f8fd02d9f698366df0bde9fec3b174becd317f238"},{"url":"assets/assets/fonts/NotoSansBengali-RateVault.ttf","sha256":"08e47602abdaf3e2c6721e4a3b7d879c6ec1d5b8b8a7823e4e32b600bd07c963"},{"url":"assets/assets/fonts/NotoSansDevanagari-RateVault.ttf","sha256":"989f2bf5bb9f383a801af362abf928c15be835fc6da8523868860ea5e3a52314"},{"url":"assets/assets/fonts/NotoSansMyanmar-RateVault.ttf","sha256":"bcffd2df5d1f630e3b2843b0f001cd2e5e9bea6a2e5c9f72a9197ad6bc3f8767"},{"url":"assets/assets/fonts/NotoSansThai-RateVault.ttf","sha256":"32f92d394f401597c0a45b7b366d161d2dde8dcd61d6817aaf091d42979d05b9"},{"url":"assets/assets/fonts/OFL.txt","sha256":"7d96701533d059cfd4191a85ecfd159e262527abd737eae6d9fb533844c70410"},{"url":"assets/assets/fonts/RateVaultFlags.ttf","sha256":"6ed69d9c6e38c5d40a957c4aeac14fe01b9ef9f9c4a716631fdfc67a9a2f0b49"},{"url":"assets/assets/fonts/Roboto.ttf","sha256":"d7b788411d24e1e019ad81e858b87ab56ee3d1f00772cfed45799d2694b7412b"},{"url":"assets/assets/icons/ratevault_icon.png","sha256":"b4390b6515565f4f495734a25e49d4b559faf4e8d2f3bacf07aa63955b8fca65"},{"url":"assets/fonts/MaterialIcons-Regular.otf","sha256":"157afb88c52896373c02e0112ab9363c343f94c2e42bb6a7120ce920b33f712b"},{"url":"assets/shaders/ink_sparkle.frag","sha256":"2dca5ab93d4ec29e963f996f3916320ba60825e9537dfb149a68008c7a16b026"},{"url":"assets/shaders/stretch_effect.frag","sha256":"ab412f07a5b9b50b67a885b24dbe16929738ae28630407d6490c924caf0a3220"},{"url":"canvaskit/canvaskit.js","sha256":"bb559f6080c7d312ac2a912b4abec9f68ff3d3022d4a603c7796b9b31460642b","group":"full"},{"url":"canvaskit/canvaskit.wasm","sha256":"fbed517a43e82452404446683f00f2e876d835aed84410695759e67b6bb01cd3","group":"full"},{"url":"canvaskit/chromium/canvaskit.js","sha256":"6018b12bd8ed37e6952eee72d59c1cf7ad707ccdb74a0a45190010f77edd9068","group":"chromium"},{"url":"canvaskit/chromium/canvaskit.wasm","sha256":"ae8ff1d858140f7b1300ced3fa89fb8c9dce0a400a0f4f1e11f6dcfb3315fdcf","group":"chromium"},{"url":"favicon.png","sha256":"4b9ff0927e64cf08279804a17f9994a7b132b979131aa4cf6ff05541428967c0"},{"url":"flutter.js","sha256":"2beb1ce6b159c71540aa66030af1d7964b6a92377cc78473745e02f97b74effe"},{"url":"flutter_bootstrap.js","sha256":"d0f93ae553893eee7f63b18085009c9f4ccc85f945180290fc51af9bae716298"},{"url":"icons/Icon-192.png","sha256":"ceabe65c64f1f1d8b588d964ba0b7b15b369ebe45eed828600ed275eb927fb32"},{"url":"icons/Icon-512.png","sha256":"e12786b32238515028378464c94163e639245ccd3d001e591f32efc7d7868ad7"},{"url":"icons/Icon-maskable-192.png","sha256":"a261bb332451756c3353d252c4d1cd0534cd9c5d12bca9424b01ddc706fcb1d6"},{"url":"icons/Icon-maskable-512.png","sha256":"f970e87d22d711c21097c463552abf4bdcfd7d467e04323be84b9a4033b86e8c"},{"url":"index.html","sha256":"d9cbf9b961e3bb0419513376171f3e4700e93cf9502c47998c61e1c5ec03d9dd"},{"url":"main.dart.js","sha256":"d75fbaf4b063afa735d452416fdf049fff74530f8c914bfd66652c195c1bfba9"},{"url":"manifest.json","sha256":"b069b6e16bbe5c54a0595f1b0e36acdc38429902e5e0e9f8c46dac189412c144"},{"url":"offline.js","sha256":"a6996c472cc8b8bdf2ab86dba5b8206e1af5e48f940e1dc4dd6e16ef9b039753"},{"url":"startup.js","sha256":"e4bc7af761d513c07d944b4d759b43ecaf1c123c4365d6ff8994c4a64314dbb6"},{"url":"version.json","sha256":"b5aa16d8f3ddbcefb621afae1a2e2b0535a983bec84344d8a9b60ccb5afe9769"}];
// CACHE_NAME, CACHE_PREFIX and ASSETS are generated from release file contents.
const scope = new URL(self.registration.scope);
const assetUrls = new Map(ASSETS.map(asset => [new URL(asset.url, scope).href, asset]));
const DOWNLOAD_CONCURRENCY = 4;
// The page registers ?canvaskit=chromium when it will load the smaller Chromium
// renderer. Only that renderer is installed; the other stays fetchable.
const VARIANT = new URLSearchParams(self.location?.search ?? '').get('canvaskit') === 'chromium'
  ? 'chromium' : 'full';
const offlineAssets = [...assetUrls].filter(([, asset]) => !asset.group || asset.group === VARIANT);

async function verified(response, asset) {
  if (!response || !response.ok || response.redirected) return false;
  const digest = await crypto.subtle.digest('SHA-256', await response.clone().arrayBuffer());
  const hash = Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
  return hash === asset.sha256;
}

async function download(url, asset) {
  // no-cache revalidates, so files the page has just loaded come from the HTTP
  // cache instead of a second download. The hash check still proves the release.
  const response = await fetch(new Request(url, { cache: 'no-cache', signal: AbortSignal.timeout(30000) }));
  if (!await verified(response, asset)) throw new Error('Release file unavailable or changed');
  return response;
}

// Wait for every in-flight task before rolling back, so no late put recreates
// a partial release after deletion. Stop assigning work after the first error.
async function bounded(items, action) {
  let cursor = 0;
  let failure;
  await Promise.all(Array.from({ length: Math.min(DOWNLOAD_CONCURRENCY, items.length) }, async () => {
    while (!failure && cursor < items.length) {
      const item = items[cursor++];
      try { await action(item); } catch (error) { failure = error; }
    }
  }));
  if (failure) throw failure;
}

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    let existed = false;
    try {
      const names = await caches.keys();
      // The same release may already be installed for the other renderer.
      existed = names.includes(CACHE_NAME);
      const sources = await Promise.all(names
        .filter(name => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
        .map(name => caches.open(name)));
      const cache = await caches.open(CACHE_NAME);
      await bounded(offlineAssets, async ([url, asset]) => {
        for (const source of sources) {
          const previous = await source.match(url);
          if (await verified(previous, asset)) {
            await cache.put(url, previous);
            return;
          }
        }
        await cache.put(url, await download(url, asset));
      });
    } catch (error) {
      if (!existed) await caches.delete(CACHE_NAME);
      throw error;
    }
    // Updates wait until all existing tabs close; never force a mixed release.
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const name of await caches.keys()) {
      if (name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME) await caches.delete(name);
    }
    await self.clients.claim();
  })());
});

async function complete(cache) {
  for (const [url] of offlineAssets) if (!await cache.match(url)) return false;
  return true;
}

self.addEventListener('message', event => {
  if (!['RATEVAULT_STATUS', 'RATEVAULT_REPAIR'].includes(event.data?.type) || !event.ports[0]) return;
  event.waitUntil((async () => {
    try {
      const cache = await caches.open(CACHE_NAME);
      if (event.data.type === 'RATEVAULT_REPAIR') {
        await bounded(offlineAssets, async ([url, asset]) => {
          if (!await cache.match(url)) await cache.put(url, await download(url, asset));
        });
      }
      event.ports[0].postMessage({ complete: await complete(cache) });
    } catch (_) { event.ports[0].postMessage({ complete: false }); }
  })());
});

async function notifyAvailability() {
  try {
    for (const client of await self.clients.matchAll({ type: 'window' })) {
      client.postMessage({ type: 'RATEVAULT_OFFLINE_CHANGED' });
    }
  } catch (_) { /* A closing client must not prevent serving a valid file. */ }
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== scope.origin || !url.pathname.startsWith(scope.pathname)) return;
  const key = request.mode === 'navigate' ? new URL('index.html', scope).href : url.href;
  const asset = assetUrls.get(key);
  // Rate responses remain outside the application cache.
  if (!asset) return;
  event.respondWith((async () => {
    let cache;
    try {
      cache = await caches.open(CACHE_NAME);
      const saved = await cache.match(key);
      if (saved) return saved;
    } catch (_) { /* Storage can become unreadable after installation. */ }
    try {
      // An evicted file must still belong to THIS active release, including
      // navigation's index.html. Never serve a newer, incompatible deployment.
      const response = await download(key, asset);
      try { await cache?.put(key, response.clone()); } catch (_) { /* usable for this request */ }
      await notifyAvailability();
      return response;
    } catch (_) {
      await notifyAvailability();
      return new Response('This version is unavailable. Reconnect and close all RateVault tabs to update.',
        { status: 503, headers: { 'Content-Type': 'text/plain', 'Cache-Control': 'no-store' } });
    }
  })());
});
