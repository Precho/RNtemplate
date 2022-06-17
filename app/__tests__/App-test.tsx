import * as DeviceInfo from 'react-native-device-info'

import util from 'util'

export const log = (value: any) => {
  const print = util.debuglog('log')
  print('log', value)
}

export const withNotch = (state: boolean) => {
  const hasNotch = jest.spyOn(DeviceInfo, 'hasNotch')

  hasNotch.mockImplementation(() => state)
}
