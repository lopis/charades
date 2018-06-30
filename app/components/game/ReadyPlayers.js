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
      <GridLayout rows={[2, 6, 2]} columns={[6, 4]}>
        <GridCell area={[1, 1, 2, 2]} place="center">
          <LobbyTitle>Round {this.props.round}</LobbyTitle>
        </GridCell>
        <GridCell area={[2, 1, 3, 3]} place='center'>
          <Box>Get Ready!</Box>
          <PlayerVs player1={player1} player2={player2} />
        </GridCell>
        <GridCell area={[3, 2, 4, 3]}>
          <RoundButton small blue onClick={onQuit}>&times;</RoundButton>
          <RoundButton onClick={onContinue}>→</RoundButton>
        </GridCell>
      </GridLayout>
    )
  }
}

export { ReadyPlayers }
