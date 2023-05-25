import { StyleSheet, View } from 'react-native'
import MapboxGL from '@rnmapbox/maps'
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
MapboxGL.setTelemetryEnabled(false)

function Map () {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView
          style={styles.map}
          logoEnabled={false}
          attributionEnabled={false}
          zoomEnabled
          pitchEnabled
          rotateEnabled
          scrollEnabled
          compassEnabled
        />
      </View>
    </View>
  )
}

export default Map
