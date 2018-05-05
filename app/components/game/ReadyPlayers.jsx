import React, { PureComponent } from 'react'

import { VerticalLayout } from '../basic/VerticalLayout'
import { Button } from '../index'

class ReadyPlayers extends PureComponent {
  render () {
    const {player1, player2, transition, onContinue, onQuit} = this.props

    if (!player1 || !player2) {
      return null
    }

    return (
      <VerticalLayout>
        <h1>Get Ready!</h1>
        <div style={{flexGrow: 1}}>
          Players <strong>{player1.name}</strong> and <strong>{player2.name}</strong>
          <br/>
          Round {this.props.round}
        </div>
        {/* <Button onClick={onQuit}>
          Quit to menu
        </Button> */}
        <Button onClick={onContinue}>
          Start
        </Button>
      </VerticalLayout>
    )
  }
}

export { ReadyPlayers }
