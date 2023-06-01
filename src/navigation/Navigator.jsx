import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Icon from 'react-native-vector-icons/Ionicons'
import Location from '../screens/Location'
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
            tabBarIcon: ({ focused, color, size }) =>
              <Icon name={focused ? 'home' : 'home-outline'} size={size} color={Colors.primary} />
          }}
        />
        <TabStack.Screen
          name='Alert'
          component={AlertScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) =>
              <Icon name={focused ? 'ios-alert-circle' : 'ios-alert-circle-outline'} size={size} color={Colors.primary} />

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
