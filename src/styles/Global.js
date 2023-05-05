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

export const Sizes = StyleSheet.create({
  text: {
    color: Colors.backgroundDark
  }
})

export const GlobalStyles = StyleSheet.create({
  ...Sizes,
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
