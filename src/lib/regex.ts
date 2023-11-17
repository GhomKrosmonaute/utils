export function matches(
  str: string | string[],
  regex: RegExp,
): {
  match: string
  groups: string[]
}[]
export function matches(
  str: string | string[],
  regex: RegExp,
  withoutGroup: true,
): string[]
export function matches(
  str: string | string[],
  regex: RegExp,
  withoutGroup: false,
): {
  match: string
  groups: string[]
}[]
export function matches(
  str: string | string[],
  regex: RegExp,
  withoutGroup?: boolean,
):
  | {
      match: string
      groups: string[]
    }[]
  | string[] {
  if (typeof str !== "string" && !Array.isArray(str))
    throw new Error("String must be provided")

  if (!regex) throw new Error("Regex must be provided")

  if (!regex.global) {
    throw new Error("Regex must have global flag")
  }

  const output: {
    match: string
    groups: string[]
  }[] = []

  for (const string of Array.isArray(str) ? str : [str]) {
    let match
    while ((match = regex.exec(string)) !== null) {
      const groups = match.slice(1)
      output.push({ match: match[0], groups })
    }
  }

  if (withoutGroup) return output.map(({ match }) => match)
  return output
}
