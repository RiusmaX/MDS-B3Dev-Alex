import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from '../styles/Global'
import AlertScreen from '../screens/Alert'

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
          name='Alert'
          component={AlertScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) =>
              <Icon name={focused ? 'ios-alert-circle' : 'ios-alert-circle-outline'} size={size} color={Colors.primary} />

          }}
        />
      </TabStack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
