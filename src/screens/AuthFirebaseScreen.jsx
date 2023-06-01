import React, { useState, useEffect } from 'react'
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'

function AuthFirebaseScreen () {
  // State hooks for email and password
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Hook to use navigation
  const navigation = useNavigation()

  // Function to handle sign up
  const signUp = async (email, password) => {
    // Check if fields are empty
    if (email === '' || password === '') {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.')
      return
    }
    try {
      // Create user with email and password
      await auth().createUserWithEmailAndPassword(email, password)
      Alert.alert('Succès', 'Compte créé avec succès !')
    } catch (error) {
      // Handle different types of sign up errors
      switch (error.code) {
        case 'auth/email-already-in-use':
          Alert.alert('Erreur', 'Cet e-mail est déjà utilisé par un autre compte.')
          break
        case 'auth/invalid-email':
          Alert.alert('Erreur', 'L\'adresse e-mail n\'est pas valide.')
          break
        case 'auth/weak-password':
          Alert.alert('Erreur', 'Le mot de passe est trop faible.')
          break
        default:
          Alert.alert('Erreur', 'Une erreur est survenue lors de la création du compte.')
      }
    }
  }

  // Function to handle sign in
  const signIn = async (email, password) => {
    // Check if fields are empty
    if (email === '' || password === '') {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.')
      return
    }
    try {
      // Sign in user with email and password
      await auth().signInWithEmailAndPassword(email, password)
      Alert.alert('Succès', 'Vous êtes maintenant connecté !')
    } catch (error) {
      // Handle different types of sign in errors
      switch (error.code) {
        case 'auth/invalid-email':
          Alert.alert('Erreur', 'L\'adresse e-mail n\'est pas valide.')
          break
        case 'auth/user-disabled':
          Alert.alert('Erreur', 'Ce compte a été désactivé.')
          break
        case 'auth/user-not-found':
          Alert.alert('Erreur', 'Aucun utilisateur ne correspond à cet e-mail.')
          break
        case 'auth/wrong-password':
          Alert.alert('Erreur', 'Le mot de passe est incorrect.')
          break
        default:
          Alert.alert('Erreur', 'Une erreur est survenue lors de la connexion.')
      }
    }
  }

  // Hook to handle user state changes
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in, show alert and navigate to Home
        Alert.alert(
          'Succès',
          'Vous êtes maintenant connecté!',
          [
            { text: 'OK', onPress: () => navigation.navigate('Home') }
          ]
        )
      }
    })

    // Unsubscribe from the listener when the component is unmounted
    return unsubscribe
  }, [])

  // Render function
  return (
    <>
      <TextInput
        placeholder='Email'
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder='Password'
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <View style={styles.container}>
        {/* Sign Up Button */}
        <Button
          title="S'inscrire"
          onPress={() => signUp(email, password)}
        />
        {/* Sign In Button */}
        <Button
          title='Se connecter'
          onPress={() => signIn(email, password)}
        />
      </View>

    </>
  )
}

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Arrange children horizontally
    justifyContent: 'space-around' // Add space between buttons
  }
})

export default AuthFirebaseScreen
