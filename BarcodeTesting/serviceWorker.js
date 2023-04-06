const staticBarcodeReading ="bar-code-reading-v1"
const assets=[
    "/",
    "/index.html",
]

self.addEventListener("install",installEvent =>{
    installEvent.waitUntill(
        caches.open(staticBarcodeReading).then(cache =>{
            cache.addAll(assets)
        })
    )
})
self.addEventListener("fetch",fetchEvent =>{
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res =>{
            return res || fetch(fetchEvent.request)
        })
    )
})