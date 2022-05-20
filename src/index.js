navigator.serviceWorker.register(
  new URL("/service-worker.js", import.meta.url),
  { type: "module" }
)

function fuzzyFind(query) {
  const queryParts = query.split("")
  return function find(input) {
    let index = 0

    for (const queryPart of queryParts) {
      index = input.indexOf(queryPart, index + 1)

      if (index < 0) {
        return false
      }
    }

    return true
  }
}

const searchInput = document.querySelector("#search")
const lists = document.querySelectorAll(".js-searchable")

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const find = fuzzyFind(searchInput.value.toLowerCase())

    for (const list of lists) {
      for (const child of list.children) {
        if (find(child.textContent.toLowerCase())) {
          child.classList.remove("hidden")
        } else {
          child.classList.add("hidden")
        }
      }
    }
  })
}
