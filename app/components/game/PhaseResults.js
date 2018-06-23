import React, { PureComponent } from 'react'

import {
  VerticalLayout,
  Button,
  PlayerLabel,
  Header,
  FlexGrow
} from '../basic'

class PhaseResults extends PureComponent {
  render () {
    const {phase, onContinue, players, scoreboard, onQuit} = this.props

    return (
      <VerticalLayout>
        <Header>Phase {phase +1} results</Header>
        <FlexGrow>
          {scoreboard.phases[phase] &&
            players.map(player => {
              const score = scoreboard.phases[phase][player.id]
              return <PlayerLabel key={player.id}
                player={player}
                value={score || 0}/>
          })}
        </FlexGrow>
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
