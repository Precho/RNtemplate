export type Palette<T> = {
  readonly [P in keyof T]: T[P] extends string ? Color : Palette<T[P]>
}

const colors = Object.freeze({
  //TODO: add hex colors :smile:
  red: 'red',
  pink: 'pink',
  blue: 'blue',
  white: 'white',
  black: 'black',
})

export const constant = {
  headerHeight: 56,
}

export const palette = colors as unknown as Palette<typeof colors>
