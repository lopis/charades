import React, { PureComponent } from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

import Button from '../../components/basic/button/Button'

export default class MenuLayout extends PureComponent {
  onChange = (value) => {
    const inputValue = value
    this.setState(() => ({ inputValue }))
  }

  makeMenu = (entries = []) => {
    return entries.map(entry => (
      <Button
        key={entry.key}
        style={styles.button}
        onClick={entry.onClick}>
        <Text style={styles.text}>{entry.label}</Text>
      </Button>
    ))
  }

  render () {
    const {menuEntries} = this.props

    return (
      <View style={styles.page}>
        <Text style={styles.title}>Charades</Text>
        {this.makeMenu(menuEntries)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    paddingVertical: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textHighlight: {
    fontSize: 20,
    color: '#38c742'
  }
})
