(()=>{let e=[],t="";e=["/browser-homepage/index.html","/browser-homepage/index.223fc406.css","/browser-homepage/index.b6214d71.js"],t="04ac46c6",self.addEventListener("install",(a=>{a.waitUntil(async function(){const a=await caches.open(t);await a.addAll(["./",...e])}())})),self.addEventListener("activate",(e=>{e.waitUntil(async function(){const e=await caches.keys();console.log(e),await Promise.all(e.map((e=>e!==t&&caches.delete(e))))}())})),self.addEventListener("fetch",(e=>{console.log(e.request.url),e.respondWith(caches.open(t).then((t=>t.match(e.request))).then((t=>t||fetch(e.request))))}))})();
//# sourceMappingURL=service-worker.js.map
