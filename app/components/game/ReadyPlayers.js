import React, { PureComponent } from 'react'

import {
  GridLayout,
  GridCell,
  LobbyTitle,
  RoundButton,
  NextButton,
  PlayerVs,
  Box
} from '../basic'

class ReadyPlayers extends PureComponent {
  render () {
    const {player1, player2, transition, onContinue, onQuit} = this.props

    if (!player1 || !player2) {
      return null
    }

    return (
      <GridLayout rows={[2, 6, 2]} columns={[6, 4]}>
        <GridCell area={[1, 1, 2, 3]} place="start">
          <LobbyTitle>Round {this.props.round} | Get ready!</LobbyTitle>
        </GridCell>
        <GridCell area={[2, 1, 3, 3]} place='center'>
          <PlayerVs player1={player1} player2={player2} />
        </GridCell>
        <GridCell area={[3, 2, 4, 3]}>
          <RoundButton small blue onClick={onQuit}>&times;</RoundButton>
          <NextButton onClick={onContinue} />
        </GridCell>
      </GridLayout>
    )
  }
}

export { ReadyPlayers }
