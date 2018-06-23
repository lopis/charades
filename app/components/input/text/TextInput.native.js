import React from 'react'
import s from 'styled-components'

import { styles } from './styles'

const TextInput = ({autoFocus, ...props}) => {
  const _input = s.TextInput`${styles}`

  return <_input autoFocus={!!autoFocus} {...props}/>
}

export { TextInput }
