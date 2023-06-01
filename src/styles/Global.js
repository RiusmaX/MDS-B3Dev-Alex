import { StyleSheet } from 'react-native'

export const Colors = StyleSheet.create({
  primary: '#D65785',
  secondary: '#7900FF',
  tertiary: '#F0A187',
  backgroundLight: '#FFFCF2',
  backgroundDark: '#00030d',
  orange: '#F0784D',
  violet: '#544594'
})

export const Fonts = StyleSheet.create({
  title: {
    color: Colors.backgroundDark,
    fontFamily: 'FontsFree-Net-All-Round-Gothic-Medium'
  },
  text: {
    color: Colors.backgroundDark,
    fontFamily: 'PTSans-Regular'
  }
})

export const GlobalStyles = StyleSheet.create({
  ...Fonts,
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
