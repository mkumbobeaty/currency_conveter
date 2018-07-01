const version = "0.1.0";
const cacheName = `convert_currency-${version}`;
self.addEventListener('install', e => {
    const timeStamp = Date.now();
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll([
                `/`,
                `index.html`,
                `css/main.css`,
                `css/bootstrap3/dist/css/bootstrap.min.css`,
                `build/main.bundle.js`,
                `js/main.js`,

            ])
                .then(() => self.skipWaiting());
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(cacheName)
            .then(cache => cache.match(event.request, {ignoreSearch: true}))
            .then(response => {
                console.log(event.request.url);

                return response || fetch(event.request);
            })
    );
});
