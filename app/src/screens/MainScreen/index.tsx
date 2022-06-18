import React from 'react'
import { Button } from 'react-native'

import { Stack } from '@mobily/stacks'

import * as route from '../../navigation/routes'
import { ScreenView } from '../../components/ScreenView'
import { goTo } from '../../navigation/utils'

export const MainScreen = () => {
  const handleNavigate = React.useCallback(() => {
    goTo(route.toTestScreen)
  }, [])

  return (
    <ScreenView>
      <Stack space={4}>
        <Button onPress={handleNavigate} title="Go to TestScreen" />
        <Button onPress={handleNavigate} title="Go to TestScreen" />
      </Stack>
    </ScreenView>
  )
}
