type Space = ' ' | '\n' | '\t'

type Trim<S extends string> = S extends `${Space}${infer L}`
  ? Trim<L>
  : S extends `${infer R}${Space}`
    ? Trim<R>
    : S
