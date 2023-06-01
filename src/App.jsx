import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {
  StatusBar,
  useColorScheme,
  View
  , StyleSheet
} from 'react-native'

import {
  Colors
} from 'react-native/Libraries/NewAppScreen'

import Navigator from './navigation/Navigator'
import { createTables } from './database/db-service'
import { useEffect } from 'react'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

function App () {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }

  useEffect(() => {
    createTables()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </View>
  )
}

export default App
