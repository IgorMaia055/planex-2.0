const CACHE_NAME = 'planex-cache-v1';
const urlsToCache = [
  './img/abstrato-white-1.png',
  './img/zambiank-ciano.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});