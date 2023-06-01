/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react'
import {
  StatusBar,
  useColorScheme,
  View
} from 'react-native'
import { Colors /*, GlobalStyles */ } from './styles/Global'
import Navigator from './navigation/Navigator'
import OneSignal from 'react-native-onesignal'
import AlertMouvement from './components/AlertMouvement'

function App () {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.backgroundDark : Colors.backgroundLight
  }

  useEffect(() => {
    const externalUserId = '123456789' // You will supply the external user id to the OneSignal SDK
    OneSignal.setExternalUserId(externalUserId)

    // Pass in email provided by customer
    OneSignal.setEmail('example@domain.com')

    // Pass in phone number provided by customer
    OneSignal.setSMSNumber('+11234567890')

    OneSignal.sendTag('first_name', 'Maxime')
    OneSignal.sendTag('last_name', 'Prouzat')
    OneSignal.sendTag('age_range', '18-25')
    OneSignal.sendTag('postcode', '44300')
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Navigator />
      <AlertMouvement />
    </View>

  )
}

export default App
