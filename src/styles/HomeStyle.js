import { StyleSheet } from 'react-native'
import { GlobalStyles } from './Global'

export const styles = StyleSheet.create({
  ...GlobalStyles,
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
  text: {
    color: 'black'
  }
})
