import React from 'react'
import {Text, TouchableNativeFeedback} from 'react-native'
import s from 'styled-components'

import { btnRound, btnBlue, btnText } from './styles'

const _button = s.View`${btnRound}`
const _text = s.Text`${btnText}`

const RoundButton = ({onClick, children, ...props}) => {
  return <TouchableNativeFeedback
    background={TouchableNativeFeedback.SelectableBackground()}
    onPress={onClick}>
    <_button {...props}>
      <_text {...props}>{children}</_text>
    </_button>
  </TouchableNativeFeedback>
}

export { RoundButton }
