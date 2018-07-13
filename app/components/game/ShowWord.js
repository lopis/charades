import React, { PureComponent } from 'react'
import s from 'styled-components'

import {
  Bonus,
  Button,
  GridCell,
  GridLayout,
  RoundButton,
  Timer,
  LobbyTitle,
  GameStatus,
  Box
} from '../basic'

const ShowWord = (props) => {
  const {
    word = {name: ''},
    transition,
    score,
    machineState,
    player1,
    player2,
    round,
    phase
  } = props

  return (
    <GridLayout columns={[2, 3, 5]} rows={[2, 6, 2]}>
      <GridCell area={[1, 1, 2, 3]} place="start">
        <LobbyTitle>Your word is</LobbyTitle>
      </GridCell>
      <GridCell area={[1, 3, 2, 4]}>
        <GameStatus {...props}/>
      </GridCell>
      <GridCell area={[2, 1, 3, 2]} place="center end">
        <RoundButton onClick={() => transition('GUESS')}>&#10003;</RoundButton>
      </GridCell>
      <GridCell area={[3, 1, 4, 2]} place="center start">
        <RoundButton blue onClick={() => transition('SKIP')}>&times;</RoundButton>
      </GridCell>
      <GridCell area={[2, 1, 3, 4]} place="center center">
        <Box style={{fontSize: word.name.length > 17 ? 30 : 60}}>
          {word.name}
        </Box>
        {word.bonus && word.bonus > 0 ? (
          <Bonus>
            {word.bonus}
          </Bonus>
        ) : null}
      </GridCell>
      <GridCell area={[2, 3, 4, 4]} place='end'>
        <Timer onTimeout={() => transition('TIMES_UP')}/>
      </GridCell>
    </GridLayout>
  )
}

export { ShowWord }
