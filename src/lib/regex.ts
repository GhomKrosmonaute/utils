// @ts-ignore
RegExp.prototype.matches = function (str, withoutGroup) {
  if (typeof str !== "string" && !Array.isArray(str))
    throw new Error("String must be provided")

  if (!this.global) {
    throw new Error("Regex must have global flag")
  }

  const output: {
    match: string
    groups: string[]
  }[] = []

  for (const string of Array.isArray(str) ? str : [str]) {
    let match
    while ((match = this.exec(string)) !== null) {
      const groups = match.slice(1)
      output.push({ match: match[0], groups })
    }
  }

  this.lastIndex = 0

  if (withoutGroup) return output.map(({ match }) => match)
  return output
}

declare global {
  interface RegExp {
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
    }[]

    /**
     * Returns an array of matches for the given string
     * @param str
     * @param withoutGroup
     */
    matches(this: RegExp, str: string | string[], withoutGroup: true): string[]

    /**
     * Returns an array of matches for the given string
     * @param str
     * @param withoutGroup
     */
    matches(
      this: RegExp,
      str: string | string[],
      withoutGroup: false,
    ): {
      match: string
      groups: string[]
    }[]

    /**
     * Returns an array of matches for the given string
     * @param str
     * @param withoutGroup
     */
    matches(
      this: RegExp,
      str: string | string[],
      withoutGroup?: boolean,
    ):
      | {
          match: string
          groups: string[]
        }[]
      | string[]
  }
}

export {}
