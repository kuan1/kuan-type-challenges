type PercentageParser<A extends string> = A extends `${infer L}%`
  ? L extends `-${infer N}`
    ? ['-', N, '%']
    : L extends `+${infer N}`
      ? ['+', N, '%']
      : ['', L, '%']
  : A extends `-${infer N}`
    ? ['-', N, '']
    : A extends `+${infer N}`
      ? ['+', N, '']
      : ['', A, '']