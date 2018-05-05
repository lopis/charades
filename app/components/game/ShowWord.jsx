import React, { PureComponent } from 'react'

import { GridLayout, GridCell } from '../basic/GridLayout'
import { Button, SkipButton, GuessButton, Bonus } from '../basic'

const ShowWord = (props) => {
  const {
    word = '',
    transition,
    score,
    machineState,
    player1,
    player2,
    round,
    phase
  } = props

  return (
    <GridLayout columns={['20%', '30%', '50%']} rows={['20%', '60%', '20%']}>
      <GridCell area={[1, 1, 2, 3]}>
        <span>Your word is</span>
      </GridCell>
      <GridCell area={[1, 3, 2, 4]}>
        <div>Players</div>
        <div>
          <strong>{player1.name}</strong> | <strong>{player2.name}</strong>
        </div>
        <div><span>{score}</span> pts</div>
      </GridCell>
      <GridCell area={[2, 1, 3, 2]}>
        <GuessButton onClick={() => transition('GUESS')} />
        <SkipButton onClick={() => transition('SKIP')} />
        {/* <Button onClick={() => transition('TIMES_UP')}>
          TIME'S UP
        </Button> */}
        {/* <Button onClick={() => transition('QUIT_GAME')}>
          Quit to menu
        </Button> */}
      </GridCell>
      <GridCell area={[2, 2, 3, 4]} style={{fontSize: '12vh'}}>
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
    </GridLayout>
  )
}

export { ShowWord }
