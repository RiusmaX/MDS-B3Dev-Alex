import React, { useEffect, useState } from 'react'
import { FlatList, PermissionsAndroid, StyleSheet, Text, View } from 'react-native'
import Geolocation from '@react-native-community/geolocation'
import BackgroundService from 'react-native-background-actions'

const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(), time))

const veryIntensiveTask = async () => {
  // Example of an infinite loop task
  await new Promise(async (resolve) => {
    for (let i = 0; BackgroundService.isRunning(); i++) {
      console.log(i)
      await sleep(1000)
    }
    resolve()
  })
}

const options = {
  taskName: 'LocationTask',
  taskTitle: 'Location Task',
  taskDesc: 'Background task for location updates',
  taskIcon: {
    name: 'ic_launcher',
    type: 'mipmap'
  },
  color: '#ff00ff',
  linkingURI: 'yourSchemeHere://chat/jane' // See Deep Linking for more info
}

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
          BackgroundService.start(veryIntensiveTask, options)
          let intervalId

          Geolocation.getCurrentPosition(
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
              useSignificantChanges: true
            }
          )

          intervalId = setInterval(() => {
            Geolocation.getCurrentPosition(
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
                useSignificantChanges: true
              }
            )
          }, 1000)

          return () => {
            clearInterval(intervalId)
            console.log('Location updates stopped')
          }
        } else {
          console.log('Location permission denied')
        }
      } catch (err) {
        console.warn(err)
      }
    }

    requestLocationPermission()
    return () => {
      BackgroundService.stop()
      console.log('Background task stopped')
    }
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
