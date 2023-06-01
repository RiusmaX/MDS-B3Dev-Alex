/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'
import OneSignal from 'react-native-onesignal'

const ONESIGNAL_APP_ID = '141f0442-939d-49ad-9deb-23e5989a487f'

// Initialisation de OneSignal
OneSignal.setAppId(ONESIGNAL_APP_ID)

// promptForPushNotificationsWithUserResponse affichera la demande d'autorisation de notification native iOS ou Android.
// Nous recommandons de supprimer le code suivant et d'utiliser à la place un message In-App pour demander l'autorisation de notifier.
OneSignal.promptForPushNotificationsWithUserResponse()

// Méthode de gestion des notifications reçues lorsque l'application est au premier plan
OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
  console.log('OneSignal: notification will show in foreground:', notificationReceivedEvent)
  const notification = notificationReceivedEvent.getNotification()
  console.log('notification: ', notification)
  const data = notification.additionalData
  console.log('additionalData: ', data)
  // Compléter par null signifie ne pas afficher de notification.
  notificationReceivedEvent.complete(notification)
})

// Méthode de gestion des notifications ouvertes
OneSignal.setNotificationOpenedHandler(notification => {
  console.log('OneSignal: notification opened:', notification)
})

AppRegistry.registerComponent(appName, () => App)
