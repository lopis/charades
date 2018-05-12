import React from 'react'
import s from 'styled-components'

import { styles } from './styles'

const TextInput = (props) => {
  const _input = s.input`${styles}`

  return <_input {...props}/>
}

export { TextInput }
