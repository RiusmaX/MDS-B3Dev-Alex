import { useEffect, useState } from 'react'
import { Button, FlatList, PermissionsAndroid, StyleSheet, Text, View, Alert } from 'react-native'
import Geolocation from '@react-native-community/geolocation'
import { getUserLocation, registerUserLocation, deleteUserLocation } from '../database/db-service'


function Location () {

  const [locations, setLocations] = useState([])

  const alert = (results) => {

    const userLocations = results.map(elm => `${elm.loc_id} : Latitude : ${elm.loc_latitude} , Longitude : ${elm.loc_longitude}`).join('\n');

    Alert.alert(
      'User location', 
      `${userLocations}`, 
      [
        { 
          text: 'OK', 
          onPress: () => console.log('OK Pressed')
        },
      ]);
  }

  const alertMessage = (message) => {

    Alert.alert(
      'Info', 
      `${message}`, 
      [
        { 
          text: 'OK', 
          onPress: () => console.log('OK Pressed')
        },
      ]);
  }

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK'
          }
        )

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted')
          const intervalId = setInterval(() => {
            Geolocation.watchPosition(
              (position) => {
                setLocations((prevLocations) => [...prevLocations, position])
                console.log(position)
                registerUserLocation(position.coords.latitude,position.coords.longitude,position.coords.altitude)
              },
              (error) => {
                console.log(error)
              },
              {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 10000,
                distanceFilter: 1,
                fastestInterval: 2000,
                showLocationDialog: true,
                useSignificantChanges: true
              }
            )
            return () => clearInterval(intervalId)
          }, 1000)
        } else {
          console.log('Location permission denied')
        }
      } catch (err) {
        console.warn(err)
      }
    }
    requestLocationPermission()
  }, [])

  const renderLocationItem = ({ item }) => {
    return (
      <View style={styles.locationItem}>
        <Text style={styles.text}>{`Latitude: ${item.coords.latitude}, Longitude: ${item.coords.longitude}`}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {locations.length === 0
        ? (
          <Text style={styles.text}>Getting location...</Text>
          )
        : (
          <FlatList data={locations} renderItem={renderLocationItem} />
          )}
      <Button
        title='Get user locations'
        onPress={() => {getUserLocation().then(results => alert(results))}
        }
      />

      <Button
        title='Delete user locations'
        onPress={() => {deleteUserLocation().then(alertMessage('User locations deleted'))}
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'black'
  },
  locationItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
})

export default Location
