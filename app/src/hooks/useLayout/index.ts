import { Dimensions, ScaledSize, StatusBar } from 'react-native'
import { hasNotch as getHasNotch } from 'react-native-device-info'
// @ts-expect-error ignore, missing types
import ExtraDimensions from 'react-native-extra-dimensions-android'

import { useWindowDimensions } from '@mobily/stacks'

import { platform, platformSelect } from '../../utils/common'

type Layout = {
  readonly width: number
  readonly height: number
  readonly isLandscape: boolean
  readonly topInset: number
  readonly bottomInset: number
}

const topInset = platformSelect({
  web: 0,
  android: StatusBar.currentHeight ?? 20,
  ios: 20,
})

export const getLayout = (dimensions: ScaledSize = Dimensions.get('window')): Layout => {
  const { width, height } = dimensions
  const hasNotch = getHasNotch()

  return {
    width,
    height,
    isLandscape: width > height,
    topInset: hasNotch ? 44 : topInset,
    bottomInset: platform.isAndroid ? ExtraDimensions.getSoftMenuBarHeight() : hasNotch ? 34 : 0,
  }
}

export const useLayout = () => {
  const dimensions = useWindowDimensions()
  return getLayout(dimensions)
}
