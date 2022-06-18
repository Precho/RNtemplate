import { platform } from '../platform'

type PlatformSelector<T> =
  | { readonly web: T; readonly native: T }
  | { readonly ios: T; readonly android: T; readonly web: T }
  | { readonly ios: T; readonly default: T }
  | { readonly android: T; readonly default: T }
  | { readonly web: T; readonly default: T }
  | { readonly native: T; readonly default: T }

export const platformSelect = <T>(selector: PlatformSelector<T>): T => {
  const casted = (selector as unknown) as any

  switch (true) {
    case 'web' in casted && platform.isWeb:
      return casted.web
    case 'ios' in casted && platform.isiOS:
      return casted.ios
    case 'android' in casted && platform.isAndroid:
      return casted.android
    case 'native' in casted && platform.isNative:
      return casted.native
    default:
      return casted.default
  }
}
