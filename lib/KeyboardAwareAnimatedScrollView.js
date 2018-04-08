/* @flow */

import { AnimatedScrollView } from 'react-native'
import listenToKeyboardEvents from './KeyboardAwareHOC'

export default listenToKeyboardEvents(ScrollView)
