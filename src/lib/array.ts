declare global {
  interface Array<T> {
    /**
     * Returns an array of objects with only the specified keys
     * @param keys
     */
    pick<K extends keyof T>(...keys: K[]): Pick<T, K>[]

    /**
     * Returns an array of objects with the specified keys removed
     * @param keys
     */
    omit<K extends string>(...keys: K[]): Omit<T, K>[]

    /**
     * Divides an array into two arrays. One whose elements all satisfy predicate and one whose elements all do not satisfy predicate. <br>
     * If predicate returns truthy, the element is added to the first array. <br>
     * If falsy, it is added to the second. <br>
     * If nullish, it is added in the both arrays.
     * @param predicate
     */
    partition(
      predicate: (value: T, index: number, array: T[]) => boolean | null,
    ): [T[], T[]]
  }
}

Array.prototype.pick = function (...keys) {
  return this.map((obj) => {
    const newObj: any = {}
    keys.forEach((key) => {
      newObj[key] = obj[key]
    })
    return newObj
  })
}

Array.prototype.omit = function (...keys) {
  return this.map((obj) => {
    const newObj: any = {}
    Object.keys(obj).forEach((key) => {
      if (!keys.includes(key as any)) newObj[key] = obj[key]
    })
    return newObj
  })
}

Array.prototype.partition = function (predicate) {
  const truthy: any[] = []
  const falsy: any[] = []
  this.forEach((value, index, array) => {
    const result = predicate(value, index, array)
    if (result) truthy.push(value)
    else if (result != void 0) falsy.push(value)
    else {
      truthy.push(value)
      falsy.push(value)
    }
  })
  return [truthy, falsy]
}

export {}
