import { useEffect } from 'react'
import { accelerometer } from 'react-native-sensors'
import { Alert, Vibration } from 'react-native'
import { throttle } from 'lodash'

/**
 * AlertMouvement is a component that detects shaking using the device's accelerometer and triggers an alert and vibration
 * @returns {null} Returns null because this component doesn't have any visual content
 */
const AlertMouvement = () => {
  const threshold = 50 // Shake detection threshold
  const alertDelay = 3000 // Minimum delay between two alerts (in milliseconds)

  /**
   * Checks if the provided accelerometer data indicates a shake
   * @param {object} data - Accelerometer data object with x, y, and z properties
   * @returns {boolean} True if a shake is detected, otherwise false
   */
  const isShake = (data) => {
    return (
      Math.abs(data.x) > threshold ||
      Math.abs(data.y) > threshold ||
      Math.abs(data.z) > threshold
    )
  }

  /**
   * Handles accelerometer data updates and triggers an alert if a shake is detected
   * @param {object} data - Accelerometer data object with x, y, and z properties
   */
  const handleAcceleration = (data) => {
    if (isShake(data)) {
      // If a shake is detected, trigger the alert
      sendAlert()
    }
  }

  /**
   * Sends an alert and triggers a vibration
   * Throttled to prevent multiple alerts within the specified alertDelay
   */
  const sendAlert = throttle(() => {
    // Display an alert dialog
    Alert.alert(
      'Shake detected',
      'A shake has been detected on your device.',
      [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed')
        }
      ],
      { cancelable: false }
    )

    // Trigger device vibration
    Vibration.vibrate()
  }, alertDelay)

  useEffect(() => {
    // Initialize the sensors and event listeners
    const subscription = accelerometer.subscribe(handleAcceleration)

    // Clean up resources when the component is unmounted
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  // Return null because this component doesn't have any visual content
  return null
}

export default AlertMouvement
