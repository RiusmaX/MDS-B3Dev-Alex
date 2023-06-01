import { StyleSheet, View } from 'react-native'
import MapboxGL from '@rnmapbox/maps'
import Geolocation from '@react-native-community/geolocation' // allows to use geolocation without expo
import { useState } from 'react'

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'tomato'
  },
  map: {
    flex: 1
  }
})
const accessToken =
  'sk.eyJ1Ijoia2VyaGFjNDQiLCJhIjoiY2xoYWR5NWZhMGdpbjNxbnNsOHcxZmk5YyJ9.j6eQ_Zuqi1c-fTA4-wpPfA'

MapboxGL.setAccessToken(accessToken)
// MapboxGL.setConnected(true)
MapboxGL.requestAndroidLocationPermissions() // ask android permission to access user location
MapboxGL.setTelemetryEnabled(false)
MapboxGL.locationManager.setLocationEventThrottle(2000)

function Map () {
  // user location
  Geolocation.getCurrentPosition(info => console.log('localisation: ', info))
  const [userLocation, setUserLocation] = useState([47.214677895892144, -1.5293022628039652])
  const userLocationUpdate = () => {
    // (PENDING: instead of using this location, use real location)
    setUserLocation([45.214677895892144, -2.5293022628039652])
  }
  // alert location
  const [alertLocation, setAlertLocation] = useState([47.21500292610005, -1.5260660347598858])
  // const alertLocationUpdate = () => {
  //   console.log('Localisation alerte mise à jour: ', MapboxGL.UserLocation.toString())
  // }

  return (
    <View style={styles.page}>
      <View style={styles.container}>

        {/* Map component */}
        <MapboxGL.MapView
          style={styles.map}
          logoEnabled={false} // hide logo
          attributionEnabled={false} // hide attribution
          zoomEnabled
          pitchEnabled
          rotateEnabled
          scrollEnabled
          compassEnabled
        >
          <MapboxGL.Camera
            zoomLevel={15}
            centerCoordinate={userLocation}
            followUserLocation
          />

          {/* User Geolocation dot */}
          <MapboxGL.UserLocation
            androidRenderMode='normal'
            animated
            showsUserHeadingIndicator
            color='blue'
            coordinate={userLocation}
            minDisplacement={5} // minimum displacement in meters to trigger geolocation update
            requestsAlwaysUse // requests to access to location at all times, even when app is in background
            onUpdate={userLocationUpdate} // callback function called when location is updated
          />

          {/* (PENDING: Add PointAnnotation items to show the trajectory) */}

          {/* Locating alert with coordinates on the map */}
          {/* (PENDING: add a list of alerts and locate them all on the map) */}
          {/* <MapboxGL.MarkerView
            coordinates={[47.2147, -1.5294]}
            color='red'
          /> */}
        </MapboxGL.MapView>
      </View>
    </View>
  )
}

export default Map
