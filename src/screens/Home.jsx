import { View, Text } from 'react-native'
import { styles } from '../styles/HomeStyle'
import { useEffect } from 'react'
import { getUserLocation, registerUserLocation, createTables } from '../database/db-service'

function Home () {

  useEffect(() => {
    createTables()
    registerUserLocation(888,10,5)
    getUserLocation().then(results => console.log(results))
    // const location = getUserLocation()
}, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  )
}

export default Home
