import React, { useState, useEffect } from 'react'
import { StatusBar, useColorScheme, View } from 'react-native'
import { Colors } from './styles/Global'
import Navigator from './navigation/Navigator'
import Onboarding from './components/Onboarding'
import AsyncStorage from '@react-native-async-storage/async-storage'

function App () {
  const isDarkMode = useColorScheme() === 'dark'
  const [isOnboardingCompleted, setOnboardingCompleted] = useState(false)

  useEffect(() => {
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
    backgroundColor: isDarkMode ? Colors.backgroundDark : Colors.backgroundLight
  }

  if (!isOnboardingCompleted) {
    // Si le Onboarding n'est pas terminé, affiche le composant Onboarding
    return <Onboarding onDone={handleOnboardingComplete} />
  }

  // Si le Onboarding est terminé, affiche le reste de l'application
  return (
    <View style={[{ flex: 1 }, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Navigator />
    </View>
  )
}

export default App
