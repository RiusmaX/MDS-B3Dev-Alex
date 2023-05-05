import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { profilData } from '../database/profilData'

const Profil = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{profilData.name}</Text>
      <Text style={styles.title}>{profilData.profilePicUrl}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nom:</Text>
        <Text style={styles.info}>{profilData.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>{profilData.email}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Age:</Text>
        <Text style={styles.info}>{profilData.age}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Pays:</Text>
        <Text style={styles.info}>{profilData.country}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Profession:</Text>
        <Text style={styles.info}>{profilData.occupation}</Text>
      </View>
      {/* Ajouter plus d'informations de profil ici */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    paddingBottom: 20,
    fontSize: 24,
    fontWeight: 'bold'
  },
  infoContainer: {
    paddingLeft: 100,
    flexDirection: 'row',
    marginVertical: 10
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10
  },
  info: {
    flex: 1
  }
})

export default Profil
