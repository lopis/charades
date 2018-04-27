import React, { PureComponent } from 'react'

import { VerticalLayout } from '../basic/VerticalLayout'
import { Button } from '../index'

const ShowWord = (props) => {
  const {word = '', transition, score, machineState, player1, player2} = props

  return (
    <VerticalLayout>
      <h1>Your word is</h1>
      <p style={{fontSize: '3em'}}>
        {word.name}
      </p>
      <p>
        {word.bonus && (
          <small>
            <strong>
              bonus: {word.bonus}
            </strong>
          </small>
        )}
      </p>
      <p>
        Players <strong>{player1.name}</strong> and <strong>{player2.name}</strong>
      </p>
      <p>
        Score: <span>{score}</span>
      </p>
      <Button onClick={() => transition('GUESS')}>
        GUESSED
      </Button>
      <Button onClick={() => transition('SKIP')}>
        SKIP
      </Button>
      <Button onClick={() => transition('TIMES_UP')}>
        TIME'S UP
      </Button>
      <Button onClick={() => transition('QUIT_GAME')}>
        Quit to menu
      </Button>
    </VerticalLayout>
  )
}

export { ShowWord }
