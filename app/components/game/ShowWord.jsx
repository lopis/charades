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
      <GridCell area={[1, 1, 2, 3]}>
        <LobbyTitle>Your word is</LobbyTitle>
      </GridCell>
      <GridCell area={[1, 3, 2, 4]}>
        <div>Players</div>
        <div>
          <strong>{player1.name}</strong> | <strong>{player2.name}</strong>
        </div>
        <div><span>{score}</span> pts</div>
      </GridCell>
      <GridCell area={[2, 1, 3, 2]}>
        <RoundButton onClick={() => transition('GUESS')}>&#10003;</RoundButton>
        <RoundButton blue onClick={() => transition('SKIP')}>&times;</RoundButton>
        {/* <Button onClick={() => transition('QUIT_GAME')}>
          Quit to menu
        </Button> */}
      </GridCell>
      <GridCell area={[2, 2, 3, 4]} style={{fontSize: word.name.length > 10 ? '4vw' : '8vw'}}>
        <span>
          {word.name}
        </span>
      </GridCell>
      {word.bonus && word.bonus > 0 ? (
        <Bonus>
          {word.bonus}
        </Bonus>
      ) : ''}
      <GridCell>
        <div>
          round {round}
        </div>
        <div>
          phase {phase}
        </div>
      </GridCell>
      <GridCell area={[3, 4, 4, 3]} place='end'>
        <Timer onTimeout={() => transition('TIMES_UP')}/>
      </GridCell>
    </GridLayout>
  )
}

export { ShowWord }
