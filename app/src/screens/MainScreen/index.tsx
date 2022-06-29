import React from 'react'
import { Button, Text } from 'react-native'

import { Stack } from '@mobily/stacks'

import * as route from '../../navigation/routes'
import { ScreenContent } from '../../components/ScreenContent'
import { ScreenView } from '../../components/ScreenView'
import { Touchable } from '../../components/Touchable'
import { goTo } from '../../navigation/utils'
import { palette } from '../../styles/variables'

export const MainScreen = () => {
  const handleNavigate = React.useCallback(() => {
    goTo(route.toTestScreen)
  }, [])

  return (
    <ScreenView backgroundColor={palette.red}>
      <ScreenContent backgroundColor={palette.blue}>
        <Stack space={4} align="left">
          <Touchable onPress={handleNavigate}>
            <Text>Test</Text>
          </Touchable>
          <Button onPress={handleNavigate} title="Go to TestScreen" />
        </Stack>
      </ScreenContent>
    </ScreenView>
  )
}
