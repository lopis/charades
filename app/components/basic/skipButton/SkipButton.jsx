import React from 'react'

import {Button} from '../'
import styles from '../guessButton/styles'

const SkipButton = (props) => {
  return <Button
    style={styles}
    className="btnBlue"
    {...props}>
    &times;
  </Button>
}

export { SkipButton }
