type Flatten<T extends any[]> = T extends [infer F, ...infer P]
  ? F extends any[]
    ? [...Flatten<F>, ...Flatten<P>]
    : [F, ...Flatten<P>]
  : T
