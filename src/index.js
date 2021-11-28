const searchInput = document.querySelector("#search")
const docLinksList = document.querySelector("#docs")

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const value = searchInput.value

    for (const child of docLinksList.children) {
      child.classList.remove("hidden")

      if (child.textContent.indexOf(value) < 0) {
        child.classList.add("hidden")
      }
    }
  })
}
