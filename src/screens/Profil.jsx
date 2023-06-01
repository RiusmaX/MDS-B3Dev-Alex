import React, { useState } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import Informations from './Informations'
import EditProfil from './EditProfil'

const Profil = ({ navigation }) => {
  const [showEdit, setShowEdit] = useState(false)

  return (
    <View style={styles.container}>
      {
      showEdit
        ? <EditProfil />
        : <Informations />
}
      <Button title='EditProfil' onPress={() => setShowEdit(!showEdit)} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center'
  }
})

export default Profil
