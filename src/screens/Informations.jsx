import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import { profilData } from '../database/profilData'

const Informations = ({ navigation }) => {
  const onPressEdit = () => {
    navigation.navigate('EditProfil')
  }

  const { name, email, age, country, occupation, profilePicUrl } = profilData[0]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Image source={{ uri: profilePicUrl }} style={styles.image} />
      <Text style={styles.text}>{`Nom : ${name}`}</Text>
      <Text style={styles.text}>{`Email : ${email}`}</Text>
      <Text style={styles.text}>{`Age : ${age}`}</Text>
      <Text style={styles.text}>{`Pays : ${country}`}</Text>
      <Text style={styles.text}>{`Travail : ${occupation}`}</Text>
      <Button title='EditProfil' onPress={onPressEdit} />
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
    fontWeight: 'bold'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 20
  },
  text: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10
  }
})

export default Informations
