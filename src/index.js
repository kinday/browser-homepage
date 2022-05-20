navigator.serviceWorker.register(
  new URL("/service-worker.js", import.meta.url),
  { type: "module" }
)

const searchInput = document.querySelector("#search")
const lists = document.querySelectorAll(".js-searchable")

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const value = searchInput.value

    for (const list of lists) {
      for (const child of list.children) {
        child.classList.remove("hidden")

        if (child.textContent.toLowerCase().indexOf(value.toLowerCase()) < 0) {
          child.classList.add("hidden")
        }
      }
    }
  })
}