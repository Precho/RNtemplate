declare type Route<X = unknown> = string & {
  readonly _1: X
  readonly TAG: 'Route'
}
declare type EventCallback<A, T = void> = (arg0: A) => T | Promise<T>

declare type RouteParams<T> = T extends Route<infer P> ? P : never
declare type PropsWithResource<T, Props = EmptyObject> = Props & {
  readonly resource: import('~/utils/wonka').Resource<T>
}

declare type Color = string & { readonly _: 'Color' }
