declare global {
  interface RegExp {
    /**
     * Returns an array of matches for the given string
     * @param str
     * @param matchOnly
     */
    matches(this: RegExp, str: string | string[], matchOnly: true): string[]

    /**
     * Returns an array of matches for the given string
     * @param str
     */
    matches(
      this: RegExp,
      str: string | string[],
    ): {
      match: string
      groups: string[]
      wordIndex: number
      letterIndex: number
    }[]

    /**
     * Returns an array of matches for the given string
     * @param str
     * @param matchOnly
     */
    matches(
      this: RegExp,
      str: string | string[],
      matchOnly: false,
    ): {
      match: string
      groups: string[]
      wordIndex: number
      letterIndex: number
    }[]

    /**
     * Returns an array of matches for the given string
     * @param str
     * @param matchOnly
     */
    matches(
      this: RegExp,
      str: string | string[],
      matchOnly?: boolean,
    ):
      | {
          match: string
          groups: string[]
          wordIndex: number
          letterIndex: number
        }[]
      | string[]
  }
}

// @ts-ignore
RegExp.prototype.matches = function (str, matchOnly) {
  if (typeof str !== "string" && !Array.isArray(str))
    throw new Error("String must be provided")

  if (!this.global) throw new Error("Regex must have global flag")

  const output: {
    match: string
    groups: string[]
    wordIndex: number
    letterIndex: number
  }[] = []

  let wordIndex = 0
  for (const string of Array.isArray(str) ? str : [str]) {
    let raw
    while ((raw = this.exec(string)) !== null) {
      const [match, ...groups] = raw
      output.push({
        match,
        groups,
        wordIndex,
        letterIndex: raw.index,
      })
    }

    wordIndex++

    this.lastIndex = 0
  }

  if (matchOnly) return output.map(({ match }) => match)
  return output
}

export {}
