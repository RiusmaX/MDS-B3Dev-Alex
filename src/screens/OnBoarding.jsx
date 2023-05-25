import { Image } from 'react-native/types'
import Onboarding from 'react-native-onboarding-swiper'
import { styles } from '../styles/HomeStyle'

const OnBoarding = () => (
  <Onboarding
    onDone={() => console.log('OnBoarding créé !')}
    pages={[
      {
        backgroundColor: '#FFFCF2',
        image: <Image source={require('../assets/img/logo.png')} />,
        title: 'Bienvenu·e à bord !',
        subtitle: 'Découvrez Alex en trois clics'
      }
    ]}
  />
)

export default OnBoarding
