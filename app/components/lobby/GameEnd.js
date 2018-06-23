import React, { PureComponent } from 'react'

import { VerticalLayout, Button, Header, Header2 } from '../basic'

class GameEnd extends PureComponent {
  render () {
    const {machineState} = this.props

    return (
      <VerticalLayout>
        <Header>Game Over!</Header>
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
