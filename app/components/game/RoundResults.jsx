import React, { PureComponent } from 'react'

import { VerticalLayout } from '../basic/VerticalLayout'
import { Button } from '../index'

class RoundResults extends PureComponent {
  render () {
    const {players = []} = this.props

    return (
      <VerticalLayout>
        <h1>Time's up!</h1>
        <p>
          Players <strong>{players[0]}</strong> and <strong>{players[1]}</strong>
        </p>
        <p>
          Your score was 9000
        </p>
        <Button onClick={() => this.props.transition('CONTINUE')}>
          Next round
        </Button>
        <Button onClick={() => this.props.transition('QUIT_GAME')}>
          Quit to menu
        </Button>
      </VerticalLayout>
    )
  }
}

export { RoundResults }
