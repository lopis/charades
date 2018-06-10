import React, { PureComponent } from 'react'

import {
  GridLayout,
  GridCell,
  RoundButton,
  LobbyTitle,
  Button,
  PlayerLabel,
} from '../basic'
import {
  TextInput
} from '../input'

class GamePlayers extends PureComponent {
  constructor () {
    super()

    this.state = {}
  }

  onPlayerCreate = (event) => {
    const value = event.target.value || ''
    if (this.props.players.find(p => p.name === value)) {
      this.setState({error: true})

      return
    }

    this.setState({error: false})
    if (value.length > 0) {
      this.props.transition(
        'CREATE_PLAYER',
        {newPlayerName: value}
      )
    }
  }

  onPlayerRemove = (playerId) => {
    if (playerId.length > 0) {
      this.props.transition(
        'REMOVE_PLAYER',
        {playerId: playerId}
      )
    }
  }

  createForm = (players = []) => {
    return players.map((player, i) => (
      <PlayerLabel type="text"
        key={player.id}
        player={player}
        value={'×'}
        onClick={() => this.onPlayerRemove(player.id)}>
      </PlayerLabel>
    ))
  }

  onInputKey = (event) => {
    if (event.key === 'Enter') {
      this.onPlayerCreate(event)
    }
  }

  render () {
    const {machineState, onContinue, onQuit} = this.props
    const players = this.props.players || []
    return (
      <GridLayout rows={[2, 8]} columns={[6]}>
        <GridCell area={[1, 1, 2, 2]} place="start">
          <LobbyTitle>
            Who's playing?
          </LobbyTitle>
        </GridCell>
        <GridCell area={[2, 1, 3, 3]} place='start' style={{maxHeight: '100%', overflow: 'auto'}}>
          <div style={{display: 'grid', maxHeight: '100%', gridTemplate: 'repeat(1, 1fr) / repeat(3, 1fr)'}}>
            {this.createForm(players)}
          </div>
        </GridCell>
        <GridCell area={[3, 1, 4, 2]} place='center start'>
          <TextInput type="text"
            autoFocus="autoFocus"
            error={this.state.error}
            placeholder="new player name"
            key={`newPlayer_${players.length}`}
            onKeyDown={this.onInputKey}
            onBlur={this.onPlayerCreate} />
        </GridCell>
        <GridCell area={[3, 2, 4, 3]}>
          <RoundButton small blue onClick={onQuit}>&times;</RoundButton>
          <RoundButton onClick={onContinue}>→</RoundButton>
        </GridCell>
      </GridLayout>
    )
  }
}

export { GamePlayers }
