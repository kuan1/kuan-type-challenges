type Reverse<T extends any[]> = T extends [...infer L, infer R] ? [R, ...Reverse<L>] : T
