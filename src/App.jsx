import React, { useState } from 'react'
import {
  StatusBar,
  useColorScheme,
  View
} from 'react-native'
import { Colors, GlobalStyles } from './styles/Global'
import Navigator from './navigation/Navigator'
import Onboarding from './components/Onboarding'

function App () {
  const isDarkMode = useColorScheme() === 'dark'
  const [isOnboardingCompleted, setOnboardingCompleted] = useState(false)

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.backgroundDark : Colors.backgroundLight
  }

  const handleOnboardingComplete = () => {
    setOnboardingCompleted(true)
  }

  if (!isOnboardingCompleted) {
    return <Onboarding onDone={handleOnboardingComplete} />
  }

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
