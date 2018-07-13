import React, { PureComponent } from 'react'

import {
  GridLayout,
  GridCell,
  LobbyTitle,
  PlayerVs,
  RoundButton,
  NextButton
} from '../basic'

class RoundResults extends PureComponent {
  render () {
    const {player1, player2, score, onContinue, onQuit} = this.props

    return (
      <GridLayout rows={[2, 6, 2]} columns={[6, 4]}>
        <GridCell area={[1, 1, 2, 3]} place="start">
          <LobbyTitle>Time's up!</LobbyTitle>
        </GridCell>
        <GridCell area={[2, 1, 3, 3]} place='center'>
          <PlayerVs player1={player1} player2={player2} score={score} />
        </GridCell>
        <GridCell area={[3, 2, 4, 3]}>
          <RoundButton small blue onClick={onQuit}>&times;</RoundButton>
          <NextButton onClick={onContinue} />
        </GridCell>
      </GridLayout>
    )
  }
}

export { RoundResults }
