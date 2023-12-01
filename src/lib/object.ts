import * as types from "./types"

// The origin and the final objects must have exactly the same type.
declare global {
  interface ObjectConstructor {
    keys<T>(object: T): types.UnionToTuple<keyof T>

    /**
     * This return type must be a 2D tuple of the key and the value of each entry.
     * @param object
     */
    entries<T>(object: T): types.UnionToTuple<
      {
        [K in keyof T]: [K, T[K]]
      }[keyof T]
    >

    fromEntries<const T extends [string, any][]>(
      entries: T,
    ): {
      [K in T[number][0]]: Extract<T[number], [K, any]>[1]
    }
  }
}

export {}
