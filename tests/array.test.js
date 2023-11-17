import ".."

describe("filterKeys", () => {
  test("filter keys", () => {
    const array = [{ a: 1, b: 2, c: 3 }]
    expect(array.filterKeys("a", "b")[0]).toEqual({
      a: 1,
      b: 2,
    })
  })
})
