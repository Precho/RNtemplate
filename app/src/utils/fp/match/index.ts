import { F, G } from '@mobily/ts-belt'

type Tuple<T, X, A = boolean> = readonly [(arg: T) => A, (arg: T) => X]

type Match = {
  <T, X>(...pairs: readonly [Tuple<T, X>, Tuple<T, X, true>]): (arg: T) => X
  <T, X>(...pairs: readonly [Tuple<T, X>, Tuple<T, X>, Tuple<T, X, true>]): (arg: T) => X
  <T, X>(...pairs: readonly [Tuple<T, X>, Tuple<T, X>, Tuple<T, X>, Tuple<T, X, true>]): (
    arg: T,
  ) => X
  <T, X>(
    ...pairs: readonly [Tuple<T, X>, Tuple<T, X>, Tuple<T, X>, Tuple<T, X>, Tuple<T, X, true>]
  ): (arg: T) => X
  <T, X>(
    ...pairs: readonly [
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X, true>,
    ]
  ): (arg: T) => X
  <T, X>(
    ...pairs: readonly [
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X, true>,
    ]
  ): (arg: T) => X
  <T, X>(
    ...pairs: readonly [
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X, true>,
    ]
  ): (arg: T) => X
  <T, X>(
    ...pairs: readonly [
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X, true>,
    ]
  ): (arg: T) => X
  <T, X>(
    ...pairs: readonly [
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X, true>,
    ]
  ): (arg: T) => X
  <T, X>(
    ...pairs: readonly [
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X, true>,
    ]
  ): (arg: T) => X
  <T, X>(
    ...pairs: readonly [
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X, true>,
    ]
  ): (arg: T) => X
  <T, X>(
    ...pairs: readonly [
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X, true>,
    ]
  ): (arg: T) => X
  <T, X>(
    ...pairs: readonly [
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X, true>,
    ]
  ): (arg: T) => X
  <T, X>(
    ...pairs: readonly [
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X>,
      Tuple<T, X, true>,
    ]
  ): (arg: T) => X
  <T, X>(...pairs: readonly Tuple<T, X>[]): (arg: T) => X | undefined
}

type When = {
  <T, X>(pred: (arg: T) => boolean, result: (arg: T) => X): Tuple<T, X>
  <T, X>(pred: (arg: T) => boolean, result: X): Tuple<T, X>
}
type Otherwise = {
  <T, X>(result: (arg0: T) => X): Tuple<T, X, true>
  <T>(result: T): Tuple<unknown, T, true>
}

export const when: When = <T, X>(pred: (arg: T) => boolean, result: X | ((arg0: T) => X)): any => {
  return [pred, G.isFunction(result) ? result : F.always(result)]
}

export const otherwise: Otherwise = <T, X>(result: T | ((arg0: T) => X)): any => {
  return [F.truthy, G.isFunction(result) ? result : F.always(result)]
}

export const match: Match =
  <T, X>(...pairs: readonly Tuple<T, X>[]) =>
  (arg: T): any => {
    const current = {
      index: 0,
    }

    // eslint-disable-next-line functional/no-loop-statement
    while (current.index < pairs.length) {
      if (pairs[current.index]?.[0](arg)) {
        return pairs[current.index]?.[1](arg)
      }

      current.index += 1
    }
  }
