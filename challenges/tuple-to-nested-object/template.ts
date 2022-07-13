type TupleToNestedObject<T extends any[], U> = T extends [T[0], ...infer R] ? {[K in T[0]]: TupleToNestedObject<R, U>} : U
