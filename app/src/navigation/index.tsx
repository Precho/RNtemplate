import * as React from 'react'

import { useBehaviorSubject } from '@mobily/wonka-hooks'
import { NavigationContainer, DefaultTheme as defaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AppRootNavigator } from './routes'
import { navigationRef } from './utils'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AppRootNavigator"
        component={AppRootNavigator}
        options={{
          headerShown: false,
          animationTypeForReplace: 'push',
          animation: 'fade_from_bottom',
        }}
      />
    </Stack.Navigator>
  )
}

export const Navigator = () => {
  const readySubject = useBehaviorSubject(false)

  const handleNavigationReady = React.useCallback(() => {
    readySubject.next(true)
  }, [])

  return (
    <NavigationContainer
      onReady={handleNavigationReady}
      ref={navigationRef}
      theme={{
        ...defaultTheme,
        colors: {
          ...defaultTheme.colors,
          background: 'red',
        },
      }}
    >
      <App />
    </NavigationContainer>
  )
}
