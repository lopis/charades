import React, { PureComponent } from 'react'

import { VerticalLayout } from '../basic/VerticalLayout'
import { Button } from '../index'

class ReadyPlayers extends PureComponent {
  render () {
    const {players = [], transition} = this.props

    return (
      <VerticalLayout>
        <h1>Get Ready!</h1>
        <p>
          Players <strong>{players[0].name}</strong> and <strong>{players[1].name}</strong>
        </p>
        <Button onClick={() => transition('CONTINUE')}>
          Start
        </Button>
        <Button onClick={() => transition('QUIT_GAME')}>
          Quit to menu
        </Button>
      </VerticalLayout>
    )
  }
}

export { ReadyPlayers }
