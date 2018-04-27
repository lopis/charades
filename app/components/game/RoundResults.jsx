import React, { PureComponent } from 'react'

import { VerticalLayout } from '../basic/VerticalLayout'
import { Button } from '../index'

class RoundResults extends PureComponent {
  render () {
    const {player1, player2, score} = this.props

    return (
      <VerticalLayout>
        <h1>Time's up!</h1>
        <p>
          Players <strong>{player1.name}</strong> and <strong>{player2.name}</strong>
        </p>
        <p>
          Your score was {score} points.
        </p>
        <Button onClick={() => this.props.transition('CONTINUE')}>
          Next round
        </Button>
        <Button onClick={() => this.props.transition('QUIT_GAME')}>
          Quit to menu
        </Button>
      </VerticalLayout>
    )
  }
}

export { RoundResults }
