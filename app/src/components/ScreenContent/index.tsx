import * as React from 'react'

import { Box, BoxProps, Row, RowProps, markAsRow } from '@mobily/stacks'

import { useScreenView } from '../ScreenView'

type Props = {
  readonly height?: RowProps['height']
  readonly backgroundColor?: Color
} & BoxProps

export const ScreenContent = (props: Props) => {
  const { children, height = 'fluid', backgroundColor, style, ...rest } = props
  const { resetPaddingX } = useScreenView()

  return (
    <Row height={height}>
      <Box
        flex={height === 'content' ? 'content' : 'fluid'}
        paddingX={resetPaddingX ? 0 : [4, 6]}
        style={[{ backgroundColor }, style]}
        {...rest}
      >
        {children}
      </Box>
    </Row>
  )
}

markAsRow(ScreenContent)
