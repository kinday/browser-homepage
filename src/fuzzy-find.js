export function fuzzyFind(query) {
  const queryParts = query.toLowerCase().split("")
  return function find(rawInput) {
    const input = rawInput.toLowerCase()
    let index = 0

    for (const queryPart of queryParts) {
      index = input.indexOf(queryPart, index)

      if (index < 0) {
        return false
      }
    }

    return true
  }
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it("finds fuzzy matches", () => {
    const find = fuzzyFind("GQL")
    expect(find("Apollo GraphQL")).toBe(true)
    expect(find("GLQ")).toBe(false)
    expect(find("GraphQL Codegen")).toBe(true)
    expect(find("vim")).toBe(false)
  })

  it("finds fuzzy matches (case insensitive)", () => {
    const find = fuzzyFind("gql")
    expect(find("Apollo GraphQL")).toBe(true)
    expect(find("GLQ")).toBe(false)
    expect(find("GraphQL Codegen")).toBe(true)
    expect(find("vim")).toBe(false)
  })

  it("finds partial matches", () => {
    const find = fuzzyFind("GraphQL")
    expect(find("Apollo GraphQL")).toBe(true)
    expect(find("GraphQL Codegen")).toBe(true)
    expect(find("vim")).toBe(false)
  })

  it("finds partial matches (case insensitive)", () => {
    const find = fuzzyFind("graphql")
    expect(find("Apollo GraphQL")).toBe(true)
    expect(find("GraphQL Codegen")).toBe(true)
  })

  it("finds full matches", () => {
    const find = fuzzyFind("GraphQL Codegen")
    expect(find("Apollo GraphQL")).toBe(false)
    expect(find("GraphQL Codegen")).toBe(true)
  })
}
