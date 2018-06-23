
import React from 'react'
import s from 'styled-components'

import { btn, btnRound } from './styles'

const RoundButton = (props) => {
  const _button = s.button`${btn}`.extend`${btnRound}`

  return <_button {...props} />
}

export { RoundButton }
