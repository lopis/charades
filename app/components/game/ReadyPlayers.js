import React, { PureComponent } from 'react'

import {
  GridLayout,
  GridCell,
  LobbyTitle,
  RoundButton,
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
      <GridLayout columns={[2, 3, 5]} rows={[2, 6, 2]}>
        <GridCell area={[1, 1, 2, 3]} place="start">
          <LobbyTitle>Round {this.props.round}</LobbyTitle>
        </GridCell>
        <GridCell area={[2, 1, 3, 4]}>
          <Box>Get Ready!</Box>
          <PlayerVs player1={player1} player2={player2} />
        </GridCell>
        <GridCell area={[3, 1, 4, 4]} place="end">
          <RoundButton small blue onClick={onQuit}>&times;</RoundButton>
          <RoundButton onClick={onContinue}>→</RoundButton>
        </GridCell>
      </GridLayout>
    )
  }
}

export { ReadyPlayers }
