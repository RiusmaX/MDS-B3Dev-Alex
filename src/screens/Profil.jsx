import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Profil = ({ navigation }) => {
  const onPressEditProfil = () => {
    navigation.navigate('EditProfil')
  }

  const onPressInformations = () => {
    navigation.navigate('Informations')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPressEditProfil}>
        <Text style={styles.buttonText}>Modifier Profil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPressInformations}>
        <Text style={styles.buttonText}>Informations</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center'
  }
})

export default Profil
