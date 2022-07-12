type RequiredByKeys<T, K = keyof T> = Expand<{
  [P in Exclude<keyof T, K>]?: T[P]
} & {
  // [P in keyof T as P extends K ? P : never]-?: T[P]
  [P in keyof T as P extends K ? P : never]-?: T[P]
}>
