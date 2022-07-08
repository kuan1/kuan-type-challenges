// type expand<T, K extends keyof T = keyof T> = Pick<T, K>

// type Merge<F, S> = expand<Omit<F, keyof S> & S>

type Merge<F, S> = {
  [K in keyof F | keyof S]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never
}
