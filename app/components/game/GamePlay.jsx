import React, { PureComponent } from 'react'

import { VerticalLayout } from '../basic/VerticalLayout'
import { Button } from '../index'

class GamePlay extends PureComponent {

  renderList = (list = []) => {
    return list.map((item, i) => (
      <div type="text"
        key={item.id}
        data-id={item.id}>
        {item.name}
      </div>
    ))
  }

  render () {
    const {machineState, onContinue, words, players} = this.props
    return (
      <VerticalLayout>
        <h1>Game Play!</h1>
        <h3>{machineState.toString()}</h3>
        <h2>Players:</h2>
        {this.renderList(players)}
        <h2>Your words:</h2>
        {this.renderList(words)}
        <Button onClick={() => this.props.transition('GAME_OVER')}>
          Finish Game
        </Button>
      </VerticalLayout>
    )
  }
}

export { GamePlay }
