import * as React from 'react'
import { ViewStyle } from 'react-native'

import { Box, BoxProps, FillView, Rows } from '@mobily/stacks'

import { useLayout } from '../../hooks/useLayout'

type Props = {
  readonly children: React.ReactNode
  readonly isScrollable?: boolean
  readonly ignoreBottomInset?: boolean
  readonly keyboardAvoid?: boolean
  readonly withGradient?: boolean
  readonly resetPaddingX?: boolean
  readonly backgroundComponent?: React.ReactNode
  readonly backgroundColor?: ViewStyle['backgroundColor']
} & BoxProps

export type ContextProps = {
  readonly isScrollable: boolean
  readonly resetPaddingX: boolean
}

export const Context = React.createContext<ContextProps>({
  isScrollable: false,
  resetPaddingX: false,
})

export const useScreenView = () => {
  return React.useContext(Context)
}

export const ScreenView = (props: Props) => {
  const {
    children,
    isScrollable = false,
    style,

    resetPaddingX = false,
    backgroundComponent,
    backgroundColor,
    ...rest
  } = props

  const layout = useLayout()

  return (
    <Context.Provider value={{ isScrollable, resetPaddingX }}>
      <FillView style={{ backgroundColor }}>
        {backgroundComponent}
        <FillView style={style} direction="column">
          <Box flex="fluid" direction="column" style={{ width: layout.width }} {...rest}>
            <Rows>{children}</Rows>
          </Box>
        </FillView>
      </FillView>
    </Context.Provider>
  )
}
