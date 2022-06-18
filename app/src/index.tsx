import React from 'react'
/**
 * @format
 */
import { AppRegistry } from 'react-native'
import { enableScreens } from 'react-native-screens'

import { Navigator } from './navigation'
import { name as appName } from '../app.json'

enableScreens()

const App = () => {
  return <Navigator />
}

AppRegistry.registerComponent(appName, () => App)
