declare global {
  interface Array<T> {
    filterKeys<K extends keyof T>(...keys: K[]): Pick<T, K>[]
  }
}

Array.prototype.filterKeys = function (...keys) {
  return this.map((obj) => {
    const newObj: any = {}
    keys.forEach((key) => {
      newObj[key] = obj[key]
    })
    return newObj
  })
}

export {}
