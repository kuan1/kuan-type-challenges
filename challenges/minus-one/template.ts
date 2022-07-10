// 此方案循环
// type MinusOne<T extends number, U extends number[] = []> = U['length'] extends T ? U[0] : MinusOne<T, [U['length'], ...U]>

type Make10Array<T extends any[]> = [
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T
]
type Make1Array<T, L extends any[] = []> = `${L['length']}` extends T
  ? L
  : Make1Array<T, [...L, 1]>
type AddEqualArrayLength<
  T extends string,
  L extends any[] = []
> = T extends `${infer U}${infer R}`
  ? AddEqualArrayLength<R, [...Make10Array<L>, ...Make1Array<U>]>
  : L

// type Pop<T extends any[]> = T extends [...infer F, number] ? F : never
type MinusOne<T extends number> = Pop<AddEqualArrayLength<`${T}`>>['length']
