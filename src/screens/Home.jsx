import { Button, StyleSheet, Text, View } from 'react-native'
import { styles_ } from '../styles/HomeStyle'
import { useEffect } from 'react'
import { createTables } from '../database/db-service'

function Home ({ navigation }) {
  
  useEffect(() => {
    createTables()
  }, [])
  
  return (
    <View style={styles.container}>
      <Text>HOME SCREEN</Text>
      <Button
        title='Aller au profile'
        onPress={() => navigation.navigate('ProfileStack')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
  text: {
    color: 'black'
  }
})

export default Home
