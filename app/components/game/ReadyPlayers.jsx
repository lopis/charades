import React, { PureComponent } from 'react'

import { VerticalLayout } from '../basic/VerticalLayout'
import { Button } from '../index'

class ReadyPlayers extends PureComponent {
  render () {
    const {player1, player2, transition} = this.props

    return (
      <VerticalLayout>
        <h1>Get Ready!</h1>
        <p>
          Players <strong>{player1.name}</strong> and <strong>{player2.name}</strong>
          <br/>
          Round {this.props.round}
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
