import { KeyboardEventName } from 'react-native'

import { platform } from '../platform'

const onKeyboardShow: KeyboardEventName = platform.isAndroid
  ? 'keyboardDidShow'
  : 'keyboardWillShow'
const onKeyboardHide: KeyboardEventName = platform.isAndroid
  ? 'keyboardDidHide'
  : 'keyboardWillHide'

export const keyboardEvents = { onKeyboardShow, onKeyboardHide }
