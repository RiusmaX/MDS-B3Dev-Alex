import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'
import Profil from '../screens/Profil'
import EditProfil from '../screens/EditProfil' // Importez le composant EditProfil
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import { Colors } from '../styles/Global'
import Informations from '../screens/Informations'

const TabStack = createBottomTabNavigator()

function Navigator () {
  return (
    <NavigationContainer>
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
          name='EditProfil'
          component={EditProfil}
          options={{
            tabBarVisible: false // Cacher le bouton dans la barre de navigation
          }}
        />
        <TabStack.Screen
          name='Informations'
          component={Informations}
          options={{
            tabBarVisible: false // Cacher le bouton dans la barre de navigation
          }}
        />
      </TabStack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
