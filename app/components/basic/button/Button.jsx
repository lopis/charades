import React from 'react'
import {TouchableOpacity, StyleSheet} from 'react-native'

import css from './styles'

const styles = StyleSheet.create(css);

const Button = ({onClick, ...props}) => {
  <TouchableOpacity
    style={styles.button}
    onPress={entry.onClick}
    {...props}/>
}

export default Button
