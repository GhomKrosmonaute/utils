import ".."

describe("matches", () => {
  test("single input length", () => {
    expect(/o/g.matches("hello world").length).toBe(2)
  })

  test("multiple inputs length", () => {
    expect(/o/g.matches(["hello world", "by ghom"]).length).toBe(3)
  })

  test("no matches", () => {
    expect(/z/g.matches("hello world").length).toBe(0)
    expect(/z/g.matches([]).length).toBe(0)
  })

  test("no inputs", () => {
    try {
      ;/o/g.matches(null)
      expect(0).toBe(1)
    } catch (error) {
      expect(error.message).toBe("String must be provided")
    }
  })

  test("invalid regex", () => {
    try {
      ;/o/.matches("hello world")
      expect(0).toBe(1)
    } catch (error) {
      expect(error.message).toBe("Regex must have global flag")
    }
  })

  test("with groups", () => {
    const match = /l(o)/g.matches("hello world")[0]
    expect(match.match).toBe("lo")
    expect(match.groups.length).toBe(1)
    expect(match.groups[0]).toBe("o")
  })

  test("without groups", () => {
    const match = /l(o)/g.matches("hello world", true)[0]
    expect(match).toBe("lo")
  })

  test("indexes", () => {
    const match = /wo/g.matches(["one", "two"])[0]
    expect(match.wordIndex).toBe(1)
    expect(match.letterIndex).toBe(1)
  })

  test("reset index", () => {
    const regex = /o/g
    regex.matches("hello world")
    expect(regex.lastIndex).toBe(0)
  })
})
