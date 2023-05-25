import { useEffect, useState } from 'react'
import { FlatList, PermissionsAndroid, StyleSheet, Text, View } from 'react-native'
import BackgroundTask from 'react-native-background-task'
import Geolocation from '@react-native-community/geolocation'

function Location () {
  const [locations, setLocations] = useState([])
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
          BackgroundTask.define(async () => {
            const intervalId = setInterval(() => {
              Geolocation.watchPosition(
                (position) => {
                  setLocations((prevLocations) => [...prevLocations, position])
                  console.log(position)
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
            })
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
