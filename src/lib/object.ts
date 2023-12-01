import * as types from "./types"

declare global {
  interface ObjectConstructor {
    keys<T>(object: T): (keyof T)[]

    /**
     * Returns an array of keys of the given object (but as a Tuple)
     */
    tupleKeys<T>(object: T): types.UnionToTuple<keyof T>

    fromEntries<const T extends [string | symbol | number, any][]>(
      entries: T,
    ): {
      [K in T[number][0]]: Extract<T[number], [K, any]>[1]
    }

    entries<T>(object: T): {
      [K in keyof T]: [K, T[K]]
    }[keyof T][]
  }
}

Object.tupleKeys = function (object) {
  return Object.keys(object) as any
}

export const object = 0
