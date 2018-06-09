import React, { PureComponent } from 'react'

import {
  GridLayout,
  GridCell,
  LobbyTitle,
  RoundButton
} from '../basic'

class ReadyPlayers extends PureComponent {
  render () {
    const {player1, player2, transition, onContinue, onQuit} = this.props

    if (!player1 || !player2) {
      return null
    }

    const fontSize = player1.length + player2.length > 15 ? '4vw' : '8vw'

    return (
      <GridLayout columns={[2, 3, 5]} rows={[2, 6, 2]}>
        <GridCell area={[1, 1, 2, 3]} place="start">
          <LobbyTitle>Round {this.props.round}</LobbyTitle>
        </GridCell>
        <GridCell area={[2, 1, 3, 4]}>
          Get Ready!
          <div style={{fontSize: fontSize}}>
            <strong>{player1.name}</strong> & <strong>{player2.name}</strong>
          </div>
        </GridCell>
        <GridCell area={[4, 1, 3, 4]} place="end">
          <RoundButton small blue onClick={onQuit}>&times;</RoundButton>
          <RoundButton onClick={onContinue}>→</RoundButton>
        </GridCell>
      </GridLayout>
    )
  }
}

export { ReadyPlayers }
