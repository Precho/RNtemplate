import { createRef } from 'react'

import { G } from '@mobily/ts-belt'
import { NavigationContainerRef, StackActions } from '@react-navigation/native'

export const navigationRef = createRef<NavigationContainerRef<Record<string, unknown>>>()

export const goTo = <T extends Route<unknown>>(route: T, params?: RouteParams<T>) => {
  if (G.isString(route)) {
    return navigationRef?.current?.navigate(route, params)
  }

  const [routeName, screenName] = route as readonly [string, string]

  if (routeName) {
    return navigationRef?.current?.navigate(routeName, {
      screen: screenName ?? routeName,
      params,
    })
  }
}

export const goBack = () => {
  navigationRef?.current?.goBack()
}

export const popToTop = () => {
  navigationRef?.current?.dispatch(StackActions.popToTop())
}

export const pop = (count?: number) => {
  navigationRef?.current?.dispatch(StackActions.pop(count))
}
