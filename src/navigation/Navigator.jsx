import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from '../styles/Global'
import Map from '../screens/Map'
const TabStack = createBottomTabNavigator()

function Navigator () {
  return (
    <NavigationContainer>
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
          name='Map'
          component={Map}
          options={{
            tabBarIcon: ({ focused, color, size }) =>
              <Icon name={focused ? 'map' : 'map-outline'} size={size} color={Colors.primary} />
          }}
        />
      </TabStack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
