import React from 'react'
import { TextInput as Input } from 'react-native'
import colors from '../../../constants/colors'

const style = {
  width: '100%',
  borderWidth: 2,
  borderColor: colors.hightlight,
  fontSize: 20,
}

const TextInput = ({autoFocus, ...props}) => {
  return <Input style={style}
    underlineColorAndroid="transparent"
    autoFocus={!!autoFocus} {...props}/>
}

export { TextInput }
