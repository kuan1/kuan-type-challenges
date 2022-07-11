type Expand<T> = {[K in keyof T]: T[K]}

type PartialByKeys<T, K = keyof T> = Expand<{
  [P in keyof T & K]?: T[P]
} & {
  [P in Exclude<keyof T, K>]: T[P]
}>