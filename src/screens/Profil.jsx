import { View, Text, StyleSheet, Image, Button } from 'react-native'
import { profilData } from '../database/profilData'

const Profil = ({ navigation }) => {
  const onPressEdit = () => {
    navigation.navigate('EditProfil')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`${profilData.name}`}</Text>
      <Image source={{ uri: profilData.profilePicUrl }} style={styles.image} />
      <Text style={styles.text}>{`Nom : ${profilData.name}`}</Text>
      <Text style={styles.text}>{`Email : ${profilData.email}`}</Text>
      <Text style={styles.text}>{`Age : ${profilData.age}`}</Text>
      <Text style={styles.text}>{`Pays : ${profilData.country}`}</Text>
      <Text style={styles.text}>{`Travail : ${profilData.occupation}`}</Text>
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
    fontSize: 16,
    marginVertical: 10
  }
})

export default Profil
