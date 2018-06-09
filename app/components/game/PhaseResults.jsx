import React, { PureComponent } from 'react'

import { VerticalLayout, Button, PlayerLabel } from '../basic'

class PhaseResults extends PureComponent {
  render () {
    const {phase, onContinue, players, scoreboard, onQuit} = this.props

    return (
      <VerticalLayout>
        <h1>Phase {phase +1} results</h1>
        <div style={{flexGrow: 1}}>
          {scoreboard.phases[phase] &&
            players.map(player => {
              const score = scoreboard.phases[phase][player.id]
              return <PlayerLabel key={player.id}
                player={player}
                value={score || 0}/>
          })}
        </div>
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
