import React from 'react'

import {Button} from '../'
import styles from './styles'

const SkipButton = (props) => {
  return <Button
    style={styles}
    {...props}>
    &times;
  </Button>
}

export { SkipButton }
