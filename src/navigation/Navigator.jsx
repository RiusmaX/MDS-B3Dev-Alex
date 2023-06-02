import Home from '../screens/Home'
import AuthFirebaseScreen from '../screens/AuthFirebaseScreen'
import Profil from '../screens/Profil'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import Location from '../screens/Location'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import { Colors } from '../styles/Global'
import AlertScreen from '../screens/Alert'

const TabStack = createBottomTabNavigator()

function Navigator () {
  return (
    <TabStack.Navigator initialRouteName='Home'>
      <TabStack.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name={focused ? 'home' : 'home-outline'} size={size} color={Colors.primary} />
          )
        }}
      />
      <TabStack.Screen
        name='Profil'
        component={Profil}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Icon2 name={focused ? 'user' : 'user-circle'} size={size} color={Colors.primary} />
          )
        }}
      />
      <TabStack.Screen
        name='Authentification'
        component={AuthFirebaseScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name={focused ? 'lock-closed' : 'lock-closed-outline'} size={size} color={Colors.primary} />
          )
        }}
      />
      <TabStack.Screen
        name='Alert'
        component={AlertScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name={focused ? 'ios-alert-circle' : 'ios-alert-circle-outline'} size={size} color={Colors.primary} />
          )
        }}
      />
      <TabStack.Screen
        name='Location'
        component={Location}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={focused ? 'location' : 'location-outline'} size={size} color={color} />
          }
        }}
      />
    </TabStack.Navigator>
  )
}

export default Navigator
