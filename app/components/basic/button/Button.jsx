import React from 'react'
import s from 'styled-components'

import { btn, btnBlue } from './styles'

const _button = s.button`${btn}`

const Button = ({blue, ...props}) => {
  if (blue) {
    _button.extend(btnBlue)
  }

  return <_button {...props}/>
}

export { Button }
