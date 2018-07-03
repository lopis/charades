import React from 'react'
import {Text, TouchableNativeFeedback} from 'react-native'
import s from 'styled-components'

import { btn, btnBlue, btnText } from './styles'

const _button = s.View`${btn}`
const _text = s.Text`${btnText}`

const Button = ({onClick, children, ...props}) => {
  return <TouchableNativeFeedback
    background={TouchableNativeFeedback.SelectableBackground()}
    onPress={onClick}>
    <_button {...props}>
      <_text>{children}</_text>
    </_button>
  </TouchableNativeFeedback>
}

export { Button }
