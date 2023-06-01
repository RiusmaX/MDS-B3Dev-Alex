import { NavigationContainer } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { StatusBar, useColorScheme, View, StyleSheet } from 'react-native'
import { Colors /*, GlobalStyles */ } from './styles/Global'
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './navigation/Navigator'
import OneSignal from 'react-native-onesignal'
import Onboarding from './components/Onboarding'
import AsyncStorage from '@react-native-async-storage/async-storage'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

function App () {
  const isDarkMode = useColorScheme() === 'dark'
  const [isOnboardingCompleted, setOnboardingCompleted] = useState(false)

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
    
    // Vérifie si l'utilisateur a déjà terminé le Onboarding lors du montage initial
    const checkOnboardingStatus = async () => {
      try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if (value === 'completed') {
          setOnboardingCompleted(true)
        }
      } catch (e) {
        // Gérer les erreurs de récupération
      }
    }
    checkOnboardingStatus()
  }, [])

  const handleOnboardingComplete = async () => {
    // Met à jour l'état pour indiquer que le Onboarding est terminé
    setOnboardingCompleted(true)
    try {
      // Stocke l'état dans AsyncStorage pour le récupérer lors des prochains lancements de l'application
      await AsyncStorage.setItem('@storage_Key', 'completed')
    } catch (e) {
      // Gérer les erreurs de sauvegarde
    }
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }


  if (!isOnboardingCompleted) {
    // Si le Onboarding n'est pas terminé, affiche le composant Onboarding
    return <Onboarding onDone={handleOnboardingComplete} />
  }

  // Si le Onboarding est terminé, affiche le reste de l'application
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
