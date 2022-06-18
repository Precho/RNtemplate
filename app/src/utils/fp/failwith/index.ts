/* eslint-disable functional/prefer-readonly-type */
/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-this-expression */
/* eslint-disable functional/no-class */

import { F, G } from '@mobily/ts-belt'

export class Failure {
  error: Error

  constructor(error: Error) {
    this.error = error
  }

  get message() {
    return this.error.message
  }

  get stack() {
    return this.error.stack
  }

  toString() {
    return this.error.toString()
  }
}

type Fail = Error | string | undefined

const isStringOrUndefined = F.either(G.isString, G.isUndefined) as (
  err: Fail,
) => err is string | undefined

export const failwith = (error: Fail) => {
  if (isStringOrUndefined(error)) {
    const err = new Error(error)
    return new Failure(err)
  }

  return new Failure(error)
}
