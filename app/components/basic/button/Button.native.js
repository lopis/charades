import React from 'react'
import {TouchableOpacity, StyleSheet} from 'react-native'

import css from './styles'

const styles = StyleSheet.create(css);

const Button = ({onClick, ...props}) => {
  return <TouchableOpacity
    style={styles.button}
    onPress={onClick}
    {...props}/>
}

export default Button
