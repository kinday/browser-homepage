import { manifest, version } from "@parcel/service-worker"

async function install() {
  const cache = await caches.open(version)
  await cache.addAll(["./", ...manifest])
}

self.addEventListener("install", (event) => {
  event.waitUntil(install())
})

async function activate() {
  const keys = await caches.keys()
  console.log(keys)
  await Promise.all(keys.map((key) => key !== version && caches.delete(key)))
}

self.addEventListener("activate", (event) => {
  event.waitUntil(activate())
})

self.addEventListener("fetch", (event) => {
  console.log(event.request.url)

  event.respondWith(
    caches
      .open(version)
      .then((cache) => cache.match(event.request))
      .then((response) => response || fetch(event.request))
  )
})
