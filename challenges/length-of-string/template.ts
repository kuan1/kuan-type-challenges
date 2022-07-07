type LengthOfString<S extends string, T extends any[] = []> = S extends ''
  ? T['length']
  : S extends `${S[0]}${infer R}`
    ? LengthOfString<R, [...T, S[0]]>
    : never
