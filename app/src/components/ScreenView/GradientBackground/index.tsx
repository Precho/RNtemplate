import * as React from 'react'
import { ViewProps } from 'react-native'

import { LinearGradient } from '../../LinearGradient'
import { styles } from './styles'
import { useScreenView } from '..'

type Props = {
  readonly style?: ViewProps['style']
  readonly children: React.ReactNode
}

export const GradientBackground = (props: Props) => {
  const { style, children } = props
  const { gradientVariant } = useScreenView()

  return (
    <LinearGradient variant={gradientVariant} style={[styles.root, style]}>
      {children}
    </LinearGradient>
  )
}
