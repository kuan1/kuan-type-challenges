type Shift<T extends any[]> = T extends [T[0], ...infer R] ? R : []
