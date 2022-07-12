type ObjectEntries<T> = {
  [P in keyof T]-?: [P, Exclude<T[P], undefined> extends never ? T[P] : Exclude<T[P], undefined>]
}[keyof T]
