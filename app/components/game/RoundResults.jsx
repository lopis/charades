import React, { PureComponent } from 'react'

import { VerticalLayout, Button } from '../basic'

class RoundResults extends PureComponent {
  render () {
    const {player1, player2, score, onContinue, onQuit} = this.props

    return (
      <VerticalLayout>
        <h1>Time's up!</h1>
        <p>
          Players <strong>{player1.name}</strong> and <strong>{player2.name}</strong>
        </p>
        <p>
          Your score was {score} points.
        </p>
        <Button onClick={onContinue}>
          Next round
        </Button>
        <Button onClick={onQuit}>
          Quit to menu
        </Button>
      </VerticalLayout>
    )
  }
}

export { RoundResults }
