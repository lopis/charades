import React, { PureComponent } from 'react'

import { VerticalLayout } from '../basic/VerticalLayout'
import { Button } from '../index'

class PhaseResults extends PureComponent {
  render () {
    const {phase, onContinue, players, scoreboard, onQuit} = this.props

    return (
      <VerticalLayout>
        <h1>Phase {phase +1} results</h1>
        {scoreboard.phases[phase] &&
          players.map(player => {
            const score = scoreboard.phases[phase][player.id]
            return <p key={player.id}>
              <strong>Player {player.name}:</strong>
              <br/>
              {score || 0} points
            </p>
        })}
        <Button onClick={onContinue}>
          Next Phase
        </Button>
        <Button onClick={onQuit}>
          Quit to menu
        </Button>
      </VerticalLayout>
    )
  }
}

export { PhaseResults }
