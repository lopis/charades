import React, { PureComponent } from 'react'

import { VerticalLayout } from '../basic/VerticalLayout'
import { Button } from '../index'

class ShowWord extends PureComponent {
  render () {
    const {word = '', transition, machineState} = this.props

    return (
      <VerticalLayout>
        <h1>Your word is</h1>
        <p style={{fontSize: '3em'}}>
          {word.name}
        </p>
        <Button onClick={() => transition('GUESS')}>
          GUESSED
        </Button>
        <Button onClick={() => transition('SKIP')}>
          SKIP
        </Button>
        <Button onClick={() => transition('QUIT_GAME')}>
          Quit to menu
        </Button>
      </VerticalLayout>
    )
  }
}

export { ShowWord }
