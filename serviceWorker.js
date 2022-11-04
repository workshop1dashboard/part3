const staticCacheName = "site-v1-part-2";
const assets = [
    "/",
    "/index.html",
    "/style.css",
    "/index.js",
    "/quiz/final.js",
    "/quiz/question.js",
    "/quiz/quiz.js",
    "/quiz/settings.js"
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticCacheName).then(cache => {
            return cache.addAll(assets).catch(err => console.log(err));
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) return response;

            const fetchRequest = event.request.clone();

            return fetch(fetchRequest).then(function (response) {
                if (!response || response.status !== 200 || response.type !== "basic") return response;

                const responseToCache = response.clone();
                caches.open(staticCacheName).then(function (cache) {cache.put(event.request, responseToCache);});

                return response;
            });
        })
    );
});

self.addEventListener("activate", (e) => {
    e.waitUntil(caches.keys().then((cacheNames) => {
        return Promise.all(
            cacheNames.map(function(cacheName) {
                if (staticCacheName.indexOf(cacheName) === -1)
                    return caches.delete(cacheName);
            })
        );
    }));
});
