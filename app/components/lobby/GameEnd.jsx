import React, { PureComponent } from 'react'

import { VerticalLayout, Button } from '../basic'

class GameEnd extends PureComponent {
  render () {
    const {machineState} = this.props

    return (
      <VerticalLayout>
        <h1>Game Over!</h1>
        <h3>{machineState.toString()}</h3>
        <Button onClick={() => this.props.transition('NEW_GAME')}>
          Start new game
        </Button>
        <Button onClick={() => this.props.transition('QUIT_GAME', {value: 'please'})}>
          Quit to menu
        </Button>
      </VerticalLayout>
    )
  }
}

export { GameEnd }
