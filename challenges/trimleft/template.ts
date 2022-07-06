type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer L}` ? TrimLeft<L> : S
