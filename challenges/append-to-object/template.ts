type AppendToObject<T, U extends string | symbol | number, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V
}