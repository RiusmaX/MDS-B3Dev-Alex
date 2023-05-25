import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Colors } from '../styles/Global'
import { profilData } from '../database/profilData'

const EditProfil = ({ navigation }) => {
  const [name, setName] = useState(profilData.name)
  const [email, setEmail] = useState(profilData.email)
  const [age, setAge] = useState(profilData.age.toString())
  const [country, setCountry] = useState(profilData.country)
  const [occupation, setOccupation] = useState(profilData.occupation)

  const handleSave = () => {
    // Mettez à jour les données de profil avec les nouvelles valeurs
    profilData.name = name
    profilData.email = email
    profilData.age = parseInt(age)
    profilData.country = country
    profilData.occupation = occupation

    // Naviguez vers la page de profil une fois que les données ont été mises à jour
    navigation.navigate('Profil')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modifier mon profil</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder='Nom'
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder='Email'
        keyboardType='email-address'
      />
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        placeholder='Âge'
        keyboardType='numeric'
      />
      <TextInput
        style={styles.input}
        value={country}
        onChangeText={setCountry}
        placeholder='Pays'
      />
      <TextInput
        style={styles.input}
        value={occupation}
        onChangeText={setOccupation}
        placeholder='Travail'
      />
      <Button title='Enregistrer' onPress={handleSave} color={Colors.primary} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10
  }
})

export default EditProfil
