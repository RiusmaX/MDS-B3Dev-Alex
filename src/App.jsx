/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import {
  StatusBar,
  useColorScheme,
  View
} from 'react-native'
import { Colors, GlobalStyles } from './styles/Global'
import Navigator from './navigation/Navigator'

function App () {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.backgroundDark : Colors.backgroundLight
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Navigator />
    </View>

  )
}

export default App
