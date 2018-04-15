import React, { PureComponent } from 'react'
import { withStatechart } from 'react-automata'

import statechart from '../helpers/statechart'
import { VerticalLayout } from '../layout/basic/VerticalLayout'
import { Button } from '../components'

class GameManager extends PureComponent {
  createPlayer = () => {
    this.props.createPlayer(this.props.newPlayerName)
  }

  onPlayerCreate = (event) => {
    const value = event.target.value || ''
    if (value.length > 0) {
      this.props.transition(
        'CREATE_PLAYER',
        {newPlayerName: event.target.value}
      )
    }
  }

  onPlayerChange = (event) => {
    const value = event.target.value || ''
    const playerId = event.target.attributes['data-player-id']
    if (value.length > 0) {
      this.props.updatePlayer(value, playerId)
    }
  }

  createLobbyForm = (players = []) => {
    return players.map((player, i) => (
      <input type="text"
        key={player.id}
        data-player-id={player.id}
        value={player.name}
        onChange={this.onPlayerChange} />
    ))
  }

  render() {
    const players = this.props.players || []
    return (
      <VerticalLayout>
        <h1>Lobby</h1>
        <h2>Ready Players</h2>
        <h3>{this.props.machineState.toString()}</h3>
        {this.createLobbyForm(players)}
        <input type="text"
          autoFocus="autoFocus"
          key={`newPlayer_${players.length}`}
          onBlur={this.onPlayerCreate} />
        <Button>Start Game</Button>
      </VerticalLayout>
    )
  }
}

export default withStatechart(statechart, { devTools: true })(GameManager)