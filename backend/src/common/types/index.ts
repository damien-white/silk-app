export type KeyOfType<O, T> = {
  [K in keyof O]: O[K] extends T ? K : never;
}[keyof O];

export type SafePrimitive = boolean | number | string;

export type None<T> = T extends null | undefined ? T : never;
export type Some<T> = T extends None<T> ? never : T;
