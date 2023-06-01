import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native'
import { Colors } from '../styles/Global'
import { profilData } from '../database/profilData'

const EditProfil = ({ navigation }) => {
  const [name, setName] = useState(profilData[0].name)
  const [email, setEmail] = useState(profilData[0].email)
  const [age, setAge] = useState(profilData[0].age.toString())
  const [country, setCountry] = useState(profilData[0].country)
  const [occupation, setOccupation] = useState(profilData[0].occupation)
  const [profilePicUrl] = useState(profilData[0].profilePicUrl)

  const handleSave = () => {
    profilData[0].name = name
    profilData[0].email = email
    profilData[0].age = parseInt(age)
    profilData[0].country = country
    profilData[0].occupation = occupation
    profilData[0].profilePicUrl = profilePicUrl

    navigation.navigate('Profil')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modifier mon profil</Text>
      <Image
        source={{ uri: profilePicUrl }} style={styles.image}
      />
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
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 20
  }
})

export default EditProfil
