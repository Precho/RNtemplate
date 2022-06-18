import React from 'react'
import { Button, SafeAreaView, StatusBar, View, useColorScheme } from 'react-native'

import * as route from '../../navigation/routes'
import { goTo } from '../../navigation/utils'

export const MainScreen = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const handleNavigate = React.useCallback(() => {
    goTo(route.toTestScreen)
  }, [])

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <Button onPress={handleNavigate} title="Go to TestScreen" />
      </View>
    </SafeAreaView>
  )
}
