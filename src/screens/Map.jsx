import { StyleSheet, View } from 'react-native'
import MapboxGL from '@rnmapbox/maps'
import AlertCard from '../components/AlertCard'
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

const userLocationUpdate = () => {
  console.log('Localisation mise à jour: ', MapboxGL.UserLocation.toString())
}

const coordinates = [47.2147, -1.5294]

function Map () {
  return (
    <View style={styles.page}>
      <View style={styles.container}>

        {/* Map component */}
        <MapboxGL.MapView
          style={styles.map}
          logoEnabled={false} // hide logo
          attributionEnabled={false} // hide attribution
          centerCoordinate={[47.2147, -1.5294]} // center map on user coordinates
          zoomEnabled
          pitchEnabled
          rotateEnabled
          scrollEnabled
          compassEnabled
        >

          {/* User Geolocation dot */}
          <MapboxGL.UserLocation
            androidRenderMode='normal'
            animated
            color='blue'
            minDisplacement={10} // minimum displacement in meters to trigger geolocation update
            requestsAlwaysUse // requests to access to location at all times, even when app is in background
            onUpdate={userLocationUpdate} // callback function called when location is updated
          />

          {/* (PENDING: Add PointAnnotation items to show the trajectory) */}

          {/* Locating alert with coordinates on the map */}
          {/* (PENDING: add a list of alerts and locate them all on the map) */}
          <MapboxGL.MarkerView
            coordinates={[47.2147, -1.5294]}
            color='red'
          >

            {/* interactible components must be passed as children of the location marker */}
            <AlertCard />

          </MapboxGL.MarkerView>
        </MapboxGL.MapView>
      </View>
    </View>
  )
}

export default Map
