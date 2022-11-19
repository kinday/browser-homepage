import { fuzzyFind } from "./fuzzy-find"

navigator.serviceWorker.register(
  new URL("/service-worker.js", import.meta.url),
  { type: "module" }
)

const searchInput = document.querySelector("#search")
const lists = document.querySelectorAll(".js-searchable")

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const find = fuzzyFind(searchInput.value)

    for (const list of lists) {
      for (const child of list.children) {
        if (find(child.textContent)) {
          child.classList.remove("hidden")
        } else {
          child.classList.add("hidden")
        }
      }
    }
  })
}
