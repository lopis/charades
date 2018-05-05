import React, { PureComponent } from 'react'

import { VerticalLayout } from '../basic/VerticalLayout'
import { Button } from '../index'

class GamePlayers extends PureComponent {
  onPlayerCreate = (event) => {
    const value = event.target.value || ''
    if (value.length > 0) {
      this.props.transition(
        'CREATE_PLAYER',
        {newPlayerName: value}
      )
    }
  }

  onPlayerRemove = (event) => {
    const playerId = event.target.attributes['data-player-id']
    if (playerId.length > 0) {
      this.props.transition(
        'REMOVE_PLAYER',
        {playerId: playerId}
      )
    }
  }

  createForm = (players = []) => {
    return players.map((player, i) => (
      <div type="text"
        key={player.id}
        data-player-id={player.id}
        onChange={this.onPlayerChange}>
        {player.name}
      </div>
    ))
  }



  render () {
    const {machineState, onContinue} = this.props
    const players = this.props.players || []
    return (
      <VerticalLayout>
        <h1>Lobby</h1>
        <h2>Ready Players</h2>
        <h3>{machineState.toString()}</h3>
        <div style={{flexGrow: 1}}>
          {this.createForm(players)}
        </div>
        <input type="text"
          autoFocus="autoFocus"
          key={`newPlayer_${players.length}`}
          onBlur={this.onPlayerCreate} />
        <Button onClick={onContinue}>Start Game</Button>
      </VerticalLayout>
    )
  }
}

export { GamePlayers }
