import * as React from 'react'
import {
  GestureResponderEvent,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native'

import { platform } from '../../utils/common/platform'
import { toBoolean } from '../../utils/fp/toBoolean'

export type Props = {
  readonly onPress?: EventCallback<GestureResponderEvent>
  readonly style?: ViewProps['style']
  readonly children: React.ReactNode
  readonly isDisabled?: boolean
  readonly activeOpacity?: number
  readonly hitSlopY?: number
  readonly hitSlopX?: number
  readonly testID?: string
  readonly rippleBorderless?: boolean
  readonly rippleRadius?: number
  readonly rippleColor?: Color
}

export const handlePressFix =
  (onPress: Props['onPress'], isDisabled: boolean) => (event: GestureResponderEvent) => {
    const requestAnimationFrameCallback = () => {
      !isDisabled && onPress?.(event)
    }
    event.persist()
    requestAnimationFrame(requestAnimationFrameCallback)
  }

const TouchableIOS = (props: Props) => {
  const {
    onPress,
    style,
    children,
    isDisabled = false,
    activeOpacity = 0.75,
    testID,
    hitSlopY = 0,
    hitSlopX = 0,
  } = props

  const handlePress = React.useCallback(handlePressFix(onPress, isDisabled), [onPress, isDisabled])

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={isDisabled}
      activeOpacity={isDisabled ? 1 : activeOpacity}
      style={style}
      testID={testID}
      hitSlop={{ top: hitSlopY, bottom: hitSlopY, left: hitSlopX, right: hitSlopX }}
    >
      {children}
    </TouchableOpacity>
  )
}

const TouchableAndroid = (props: Props) => {
  const {
    onPress,
    style,
    children,
    isDisabled = false,
    activeOpacity,
    rippleBorderless,
    rippleRadius,
    rippleColor,
    testID,
    hitSlopY = 0,
    hitSlopX = 0,
  } = props

  const handlePress = React.useCallback(handlePressFix(onPress, isDisabled), [onPress, isDisabled])

  const useForeground = Platform.Version >= 28 && rippleBorderless

  return activeOpacity ? (
    <TouchableIOS {...props}>{props.children}</TouchableIOS>
  ) : (
    <TouchableNativeFeedback
      disabled={isDisabled}
      useForeground={useForeground}
      background={TouchableNativeFeedback.Ripple(
        rippleColor ?? 'rgba(255,255,255,0.5)',
        toBoolean(rippleBorderless),
        rippleRadius,
      )}
      onPress={handlePress}
      testID={testID}
      hitSlop={{ top: hitSlopY, bottom: hitSlopY, left: hitSlopX, right: hitSlopX }}
    >
      <View style={style}>{React.Children.only(children)}</View>
    </TouchableNativeFeedback>
  )
}

export const Touchable = platform.isAndroid
  ? Platform.Version >= 21
    ? TouchableAndroid
    : TouchableIOS
  : TouchableIOS
