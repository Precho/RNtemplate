import { Platform } from 'react-native'

const isiOS = Platform.OS === 'ios'
const isAndroid = Platform.OS === 'android'
const isWeb = Platform.OS === 'web'

export const platform = Object.freeze({
  isiOS,
  isAndroid,
  isWeb,
  isNative: isiOS || isAndroid,
})
