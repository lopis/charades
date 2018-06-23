import React, { PureComponent } from 'react'

import {
  VerticalLayout,
  Button,
  Header,
  Header2,
  Header3,
  Bold
} from '../basic'

class RoundResults extends PureComponent {
  render () {
    const {player1, player2, score, onContinue, onQuit} = this.props

    return (
      <VerticalLayout>
        <Header>Time's up!</Header>
        <Header2>
          Players <Bold>{player1.name}</Bold> and <Bold>{player2.name}</Bold>
        </Header2>
        <Header3>
          Your score was {score} points.
        </Header3>
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
