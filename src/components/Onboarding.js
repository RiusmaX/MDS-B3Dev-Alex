import { Image } from 'react-native'
import React from 'react'

import Onboarding from 'react-native-onboarding-swiper'

const Simple = ({ onDone }) => (
  <Onboarding
    onDone={onDone} // Passer la fonction onDone comme prop
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={require('../img/circle.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper'
      },
      {
        backgroundColor: '#fe6e58',
        image: <Image source={require('../img/square.png')} />,
        title: 'The Title',
        subtitle: 'This is the subtitle that sumplements the title.'
      },
      {
        backgroundColor: '#999',
        image: <Image source={require('../img/triangle.png')} />,
        title: 'Triangle',
        subtitle: "Beautiful, isn't it?"
      }
    ]}
  />
)

export default Simple
