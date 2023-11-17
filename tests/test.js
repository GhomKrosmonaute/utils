import * as utils from ".."

describe("regex", () => {
  describe("matches", () => {
    test("single input length", () => {
      expect(utils.matches('hello world', /o/g).length).toBe(2)
    })

    test("multiple inputs length", () => {
      expect(utils.matches(['hello world', 'by ghom'], /o/g).length).toBe(3)
    })

    test("no matches", () => {
      expect(utils.matches('hello world', /z/g).length).toBe(0)
      expect(utils.matches([], /z/g).length).toBe(0)
    })

    test("no inputs", () => {
      try {
        utils.matches(null, /o/g)
        expect(0).toBe(1)
      } catch (error) {
        expect(error.message).toBe('String must be provided')
      }
    })

    test("no regex", () => {
      try {
        utils.matches('hello world', null)
        expect(0).toBe(1)
      } catch (error) {
        expect(error.message).toBe('Regex must be provided')
      }
    })

    test("invalid regex", () => {
      try {
        utils.matches('hello world', /o/)
        expect(0).toBe(1)
      } catch (error) {
        expect(error.message).toBe('Regex must have global flag')
      }
    })

    test("with groups", () => {
      const match = utils.matches('hello world', /l(o)/g)[0]
      expect(match.match).toBe('lo')
      expect(match.groups.length).toBe(1)
      expect(match.groups[0]).toBe('o')
    })

    test("without groups", () => {
      const match = utils.matches('hello world', /l(o)/g, true)[0]
      expect(match).toBe('lo')
    })
  })
})
