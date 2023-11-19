import ".."

describe("pick", () => {
  test("filter keys", () => {
    const array = [{ a: 1, b: 2, c: 3 }]
    expect(array.pick("a", "b")[0]).toEqual({
      a: 1,
      b: 2,
    })
  })
})

describe("omit", () => {
  test("filter keys", () => {
    const array = [{ a: 1, b: 2, c: 3 }]
    expect(array.omit("a", "b")[0]).toEqual({
      c: 3,
    })
  })
})

describe("partition", () => {
  test("divides", () => {
    const array = [true, false, true, false, null]
    expect(array.partition((item) => item)).toEqual([
      [true, true, null],
      [false, false, null],
    ])
  })
})
