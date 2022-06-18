export const toBoolean = <T>(value: T): value is NonNullable<T> => {
  return !!value
}
