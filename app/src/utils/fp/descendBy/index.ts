import { A } from '@mobily/ts-belt'

export function descendBy<T extends object, K0 extends keyof T>(
  path: readonly [K0],
): (a: T, b: T) => number

export function descendBy<T, K0 extends keyof T, K1 extends keyof T[K0]>(
  path: readonly [K0, K1],
): (a: T, b: T) => number

export function descendBy<
  T,
  K0 extends keyof T,
  K1 extends keyof T[K0],
  K2 extends keyof T[K0][K1],
>(path: readonly [K0, K1, K2]): (a: T, b: T) => number

export function descendBy<
  T,
  K0 extends keyof T,
  K1 extends keyof T[K0],
  K2 extends keyof T[K0][K1],
>(path: readonly [K0] | readonly [K0, K1] | readonly [K0, K1, K2]): (a: T, b: T) => number {
  return (a, b) => {
    // @ts-expect-error ignore
    const x = A.reduce(path, a, (acc, value) => acc?.[value]) ?? 0
    // @ts-expect-error ignore
    const y = A.reduce(path, b, (acc, value) => acc?.[value]) ?? 0

    return x === y ? 0 : x > y ? -1 : 1
  }
}
