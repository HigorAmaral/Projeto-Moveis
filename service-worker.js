const CACHE_NAME = 'loja-brinquedos-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/style/index.css',
  '/assets/script/index.js',
  '/assets/imagens/icon.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
