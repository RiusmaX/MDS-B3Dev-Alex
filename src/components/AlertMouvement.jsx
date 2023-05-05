import { useEffect } from 'react'
import { accelerometer } from 'react-native-sensors'
import { Alert, Vibration } from 'react-native'
import { throttle } from 'lodash'

const AlertMouvement = () => {
  const threshold = 20 // Seuil de détection de secousse
  const alertDelay = 3000 // Délai minimum entre deux alertes (en millisecondes)

  const isShake = (data) => {
    return (
      Math.abs(data.x) > threshold ||
      Math.abs(data.y) > threshold ||
      Math.abs(data.z) > threshold
    )
  }

  const handleAcceleration = (data) => {
    if (isShake(data)) {
      // Si une secousse est détectée, déclencher l'alerte
      sendAlert()
    }
  }

  const sendAlert = throttle(() => {
    // Afficher une boîte de dialogue d'alerte
    Alert.alert(
      'Secousse détectée',
      'Une secousse a été détectée sur votre appareil.',
      [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed')
        }
      ],
      { cancelable: false }
    )

    // Faire vibrer le téléphone
    Vibration.vibrate()
  }, alertDelay)

  useEffect(() => {
    // Initialiser les capteurs et les écouteurs d'événements
    const subscription = accelerometer.subscribe(handleAcceleration)

    // Nettoyer les ressources lors du démontage du composant
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  // Retourne un élément vide ici, car ce composant n'a pas besoin de contenu visuel
  return null
}

export default AlertMouvement
