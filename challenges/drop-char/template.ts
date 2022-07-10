type DropChar<S extends string, C extends string = ' '> = S extends `${infer L}${infer R}`
  ? `${L extends C ? '' : L}${DropChar<R, C>}`
  : S
