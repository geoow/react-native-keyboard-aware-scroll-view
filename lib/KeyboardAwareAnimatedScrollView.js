/* @flow */

import { Animated } from 'react-native'
import listenToKeyboardEvents from './KeyboardAwareHOC'

export default listenToKeyboardEvents(Animated.ScrollView)
