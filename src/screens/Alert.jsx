import React, { useEffect, useState } from 'react'
import { View, Text, Button, Modal, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Geolocation from '@react-native-community/geolocation'
import { styles } from '../styles/HomeStyle'
import { Colors } from '../styles/Global'

const AlertScreen = () => {
  const [location, setLocation] = useState(null) // État pour stocker la localisation
  const [alertType, setAlertType] = useState(null) // État pour stocker le type d'alerte
  const [modalVisible, setModalVisible] = useState(false) // État pour gérer la visibilité du modal

  useEffect(() => {
    // Effectue la récupération de la localisation au chargement de l'écran
    const getCurrentLocation = () => {
      Geolocation.getCurrentPosition(
        position => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
        },
        error => {
          console.log('Error in getting location:', error)
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      )
    }

    getCurrentLocation()
  }, [])

  const handleAlertType = type => {
    setAlertType(type) // Met à jour le type d'alerte avec la valeur choisie
    setModalVisible(false) // Ferme le modal après avoir fait un choix
  }

  const renderLocationInfo = () => {
    if (location && alertType) {
      // Affiche les informations de localisation et de type d'alerte si elles sont disponibles
      return (
        <Text>
          Latitude: {location.latitude}, Longitude: {location.longitude}, Type d'alerte: {alertType}
        </Text>
      )
    }
    return null
  }

  return (
    <View style={stylesPopup.container}>
      <Button
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: [Colors.primary, Colors.secondary],
          start: { x: 0, y: 1 },
          end: { x: 1, y: 1 }
        }}
        onPress={() => {
          if (location) {
            setModalVisible(true) // Affiche le modal si la localisation est disponible
          } else {
            Geolocation.requestAuthorization() // Demande l'autorisation de localisation si elle n'est pas disponible
          }
        }}
        title='ALERT ALEX'
      />
      {location && (
        <Modal
          animationType='slide'
          transparent
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={stylesPopup.modalContainer}>
            {/* Affiche le texte de choix pour l'alerte */}
            <Text style={stylesPopup.text}>Êtes-vous la victime ou témoin ?</Text>
            <Button title='Victime' onPress={() => handleAlertType('Victime')} />
            <Button title='Témoin' onPress={() => handleAlertType('Témoin')} />
          </View>
        </Modal>
      )}
      {renderLocationInfo()}
    </View>
  )
}

const stylesPopup = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.85)'
  },
  text: {
    color: '#fff', // Couleur du texte en blanc
    fontSize: 18 // Taille de la police du texte
  }
})

export default AlertScreen
