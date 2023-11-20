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

describe("getter", () => {
  const array = [1, 2, 3, 4, 5, 6]

  test("first", () => {
    expect(array.first).toBe(1)
  })

  test("second", () => {
    expect(array.second).toBe(2)
  })

  test("third", () => {
    expect(array.third).toBe(3)
  })

  test("fourth", () => {
    expect(array.fourth).toBe(4)
  })

  test("fifth", () => {
    expect(array.fifth).toBe(5)
  })

  test("last", () => {
    expect(array.last).toBe(6)
  })
})
