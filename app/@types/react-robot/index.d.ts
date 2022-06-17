/* eslint-disable functional/prefer-readonly-type */

declare module 'react-robot' {
  import { Machine } from 'robot3'

  export type EventPayload<T, X = string> = { type: X; payload: T }
  // TODO: add proper types
  export type Event<T = string, P = any> = T | EventPayload<P, T>
  export type SendEvent<T> = (event: Event<T>) => void
  export type Current<S, C> = { name: keyof S; context: C }

  export function useMachine<S, C, E>(machine: Machine<S, C>): [Current<S, C>, SendEvent<E>]
}
