type KebabCase<S extends string> = S extends `${infer L}${infer R}`
  ? Uncapitalize<R> extends R
    ? `${Lowercase<L>}${KebabCase<R>}`
    : `${Lowercase<L>}-${KebabCase<R>}`
  : ''



