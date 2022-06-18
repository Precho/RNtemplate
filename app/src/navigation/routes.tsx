import * as React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { MainScreen } from '../screens/MainScreen'
import { TestScreen } from '../screens/TestScreen'

const AppRootNativeStack = createNativeStackNavigator()
export const routeMainScreen = '/MainScreen'
export const routeTestScreen = '/TestScreen'

export const toMainScreen = [routeMainScreen, routeMainScreen] as unknown as Route
export const toTestScreen = [routeTestScreen, routeTestScreen] as unknown as Route

export const AppRootNavigator = () => {
  return (
    <AppRootNativeStack.Navigator>
      <AppRootNativeStack.Group
        screenOptions={{
          presentation: 'card',
          //TODO: ADD HEADER
          // header: props => <ScreenHeader {...props} />,
          headerShown: true,
        }}
      >
        <AppRootNativeStack.Screen component={MainScreen} name={routeMainScreen} />
        <AppRootNativeStack.Screen component={TestScreen} name={routeTestScreen} />
      </AppRootNativeStack.Group>
    </AppRootNativeStack.Navigator>
  )
}
