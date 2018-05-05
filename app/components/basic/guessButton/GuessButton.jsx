import React from 'react'

import {Button} from '../'
import styles from './styles'

const GuessButton = (props) => {
  return <Button
    style={styles}
    {...props}>
    &#10003;
  </Button>
}

export { GuessButton }
