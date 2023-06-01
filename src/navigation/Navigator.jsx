import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'
import AuthFirebaseScreen from '../screens/AuthFirebaseScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from '../styles/Global'

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
          name='Authentification'
          component={AuthFirebaseScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) =>
              <Icon name={focused ? 'lock-closed' : 'lock-closed-outline'} size={size} color={Colors.primary} />
          }}
        />
      </TabStack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
