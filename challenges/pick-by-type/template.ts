type PickByType<T, U> = {
  [K in (keyof T | keyof T) as T[K] extends U ? K : never]: T[K]
}
