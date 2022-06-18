import React from 'react'
/**
 * @format
 */
import { AppRegistry } from 'react-native'
import { enableScreens } from 'react-native-screens'

import { Navigator } from './navigation'
import { Providers } from './providers'
import { name as appName } from '../app.json'

enableScreens()

const App = () => {
  return (
    <Providers>
      <Navigator />
    </Providers>
  )
}

AppRegistry.registerComponent(appName, () => App)
