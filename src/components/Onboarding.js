import { Image, StyleSheet } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'

// Composant Simple qui utilise le composant Onboarding
const Simple = ({ onDone }) => (

  <Onboarding
    onDone={onDone} // Prop : fonction onDone appelée lorsque l'onboarding est terminé
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={require('../img/alex.png')} />, // Image utilisée pour cette page
        title: 'Bienvenu', // Titre affiché pour cette page
        subtitle: 'L\'application d\'alert instantanée.' // Sous-titre affiché pour cette page
      },
      {
        backgroundColor: '#fe6e58',
        image: <Image
          source={require('../img/Tel.png')}
          style={styles.image}
               />, // Image utilisée pour cette page avec un style spécifique
        title: 'Alert ultime', // Titre affiché pour cette page
        subtitle: 'Agiter votre téléphone' // Sous-titre affiché pour cette page
      },
      {
        backgroundColor: '#999',
        image: <Image source={require('../img/Buzzer.png')} style={styles.image} />, // Image utilisée pour cette page avec un style spécifique
        title: 'Alert secondaire', // Titre affiché pour cette page
        subtitle: "Signaler sur l'application" // Sous-titre affiché pour cette page
      }
    ]}
  />
)

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
  }
})

export default Simple
