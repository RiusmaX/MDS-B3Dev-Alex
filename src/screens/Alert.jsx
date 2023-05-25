import React, { useState } from 'react'
import { View, Text, Alert, Button } from 'react-native' // Ajout de la fonction Alert
import LinearGradient from 'react-native-linear-gradient'
import Geolocation from '@react-native-community/geolocation'
import { styles } from '../styles/HomeStyle'
import { Colors } from '../styles/Global'

function AlertScreen ({ navigation }) {
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [alertType, setAlertType] = useState(null) // Ajout d'un état pour stocker le choix de l'utilisateur

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      },

      error => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
  }

  const showAlert = () => {
    Alert.alert(
      'Êtes-vous la victime ou témoin ?', // Titre de la boîte de dialogue
      `Latitude: ${latitude} \n Longitude: ${longitude}`,
      [
        {
          text: 'Victime',
          onPress: () => setAlertType('Victime'), // Mettre à jour l'état avec le choix de l'utilisateur
          style: 'cancel'
        },
        {
          text: 'Témoin',
          onPress: () => setAlertType('Témoin'),
          style: 'cancel'
        }
      ],
      { cancelable: false }
    )
  }

  return (
    <View style={styles.container}>
      <Button
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: [Colors.primary, Colors.secondary],
          start: { x: 0, y: 1 },
          end: { x: 1, y: 1 }
        }}
        onPress={() => {
          getLocation() // Obtenir la géolocalisation lorsque le bouton est cliqué
          showAlert() // Ouvrir la boîte de dialogue lorsque le bouton est cliqué
        }}
        title='ALERT ALEX'
      />
      {latitude && longitude && alertType && ( // Afficher le choix de l'utilisateur lorsque l'état est défini
        <Text>
          Latitude: {latitude}, Longitude: {longitude}, Type d'alerte: {alertType}
        </Text>
      )}
    </View>
  )
}

export default AlertScreen
