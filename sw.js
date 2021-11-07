self.addEventListener("install", function (e) {
    console.log('Service Worker - Installing', e);
})

self.addEventListener("activate", function (e) {
    console.log('Service Worker - Activate', e);
    return self.clients.claim();
})

self.addEventListener("fetch", function (e) {
    console.log('Service Worker - Fetching Something', e);
})