import React, { PureComponent } from 'react'

import { VerticalLayout } from '../basic/VerticalLayout'
import { Button } from '../index'

class GameWords extends PureComponent {
  onWordCreate = (event) => {
    const value = event.target.value || ''
    if (value.length > 0) {
      this.props.transition(
        'CREATE_WORD',
        {word: event.target.value}
      )
    }
  }

  renderWordList = () => {
    const words = this.props.words || []
    return words.map((word, i) => (
      <span type="text"
        key={word.id}
        data-word-id={word.id}
        onChange={this.onWordChange}>
        {word.name}
      </span>
    ))
  }

  render () {
    const {machineState, onContinue, words} = this.props
    return (
      <VerticalLayout>
        <h1>Game Words</h1>
        <h2>Add your words</h2>
        <h3>{machineState.toString()}</h3>
        <div style={{flexGrow: 1}}>
          {this.renderWordList()}
        </div>
        <input type="text"
          autoFocus="autoFocus"
          key={`newPlayer_${words.length}`}
          onBlur={this.onWordCreate} />
        <Button onClick={onContinue}>Start Game</Button>
      </VerticalLayout>
    )
  }
}

export { GameWords }
