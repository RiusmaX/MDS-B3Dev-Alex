import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'
import OnBoarding from '../screens/OnBoarding'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from '../styles/Global'
const TabStack = createBottomTabNavigator()

function Navigator () {
  return (
    <NavigationContainer>
      <TabStack.Navigator initialRouteName='OnBoarding'>
        <TabStack.Screen
          name='OnBoarding'
          component={OnBoarding}
          options={{
            tabBarIcon: ({ focused, color, size }) =>
              <Icon name={focused ? 'bulb1' : 'bulb1-outline'} size={size} color={Colors.primary} />
          }}
        />
        <TabStack.Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon: ({ focused, color, size }) =>
              <Icon name={focused ? 'home' : 'home-outline'} size={size} color={Colors.primary} />
          }}
        />
      </TabStack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
