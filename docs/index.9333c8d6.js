function e(e,t,o,r){Object.defineProperty(e,t,{get:o,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequire725c;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire725c=n),n.register("k96JV",(function(t,o){var r,n;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>n),(e=>n=e));var i={};r=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)i[t[o]]=e[t[o]]},n=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),n("k96JV").register(JSON.parse('{"9vqfN":"index.9333c8d6.js","fWZ52":"service-worker.js"}'));var i=Object.assign(Object.create(null),{url:"file:///src/fuzzy-find.js"});function s(e){const t=e.toLowerCase().split("");return function(e){const o=e.toLowerCase();let r=0;for(const e of t)if(r=o.indexOf(e,r),r<0)return!1;return!0}}if(i.vitest){const{it:e,expect:t}=i.vitest;e("finds fuzzy matches",(()=>{const e=s("GQL");t(e("Apollo GraphQL")).toBe(!0),t(e("GLQ")).toBe(!1),t(e("GraphQL Codegen")).toBe(!0),t(e("vim")).toBe(!1)})),e("finds fuzzy matches (case insensitive)",(()=>{const e=s("gql");t(e("Apollo GraphQL")).toBe(!0),t(e("GLQ")).toBe(!1),t(e("GraphQL Codegen")).toBe(!0),t(e("vim")).toBe(!1)})),e("finds partial matches",(()=>{const e=s("GraphQL");t(e("Apollo GraphQL")).toBe(!0),t(e("GraphQL Codegen")).toBe(!0),t(e("vim")).toBe(!1)})),e("finds partial matches (case insensitive)",(()=>{const e=s("graphql");t(e("Apollo GraphQL")).toBe(!0),t(e("GraphQL Codegen")).toBe(!0)})),e("finds full matches",(()=>{const e=s("GraphQL Codegen");t(e("Apollo GraphQL")).toBe(!1),t(e("GraphQL Codegen")).toBe(!0)}))}var a;a=new URL(n("k96JV").resolve("fWZ52"),import.meta.url).toString(),navigator.serviceWorker.register(a).then((async function(e){try{const t=await fetch("/version");if(!t.ok)throw new Error("Failed to fetch remote version");if(void 0!==await t.text())throw new Error("Local version and remote version mismatch")}catch(t){e.update()}finally{return e}}));const l=document.querySelector("#search"),c=document.querySelectorAll(".js-searchable");l&&l.addEventListener("input",(()=>{const e=s(l.value);for(const t of c)for(const o of t.children)e(o.textContent)?o.classList.remove("hidden"):o.classList.add("hidden")}));
//# sourceMappingURL=index.9333c8d6.js.map
