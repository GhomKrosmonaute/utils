import ".."

describe("tupleKeys", () => {
  const object = {
    a: 1,
    2: "b",
    [Symbol("foo")]: {},
  }

  test("length", () => {
    expect(Object.tupleKeys(object).length === 2).toBeTruthy()
  })

  test("keys", () => {
    expect(Object.tupleKeys(object)).toEqual(["2", "a"])
  })
})
