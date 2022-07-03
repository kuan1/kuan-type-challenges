type isEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2)
  ? true
  :false

type Includes<T extends readonly any[], U> = T extends [infer S, ...infer R]
  ? isEqual<S, U> extends true
    ? true
    : Includes<R, U>
  : false
