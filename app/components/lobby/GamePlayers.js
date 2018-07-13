import React, { Component } from 'react'

import {
  GridLayout,
  GridCell,
  GridRepeatLayout,
  RoundButton,
  LobbyTitle,
  Button,
  NextButton,
  PlayerLabel,
  PlayerList
} from '../basic'
import {
  TextInput
} from '../input'

class GamePlayers extends Component {
  constructor () {
    super()

    this.state = {}
  }

  addPlayer = (name) => {
    if (this.props.players.find(p => p.name === name)) {
      this.setState({error: true})

      return
    }

    this.setState({error: false})
    if (name.length > 0) {
      this.props.transition(
        'CREATE_PLAYER',
        {newPlayerName: name}
      )
    }
  }

  onPlayerCreate = (event) => {
    const value = event.target.value || ''
    this.addPlayer(value)
  }

  onPlayerRemove = (playerId) => {
    if (playerId.length > 0) {
      this.props.transition(
        'REMOVE_PLAYER',
        {playerId: playerId}
      )
    }
  }

  render () {
    const {machineState, onContinue, onQuit} = this.props
    const players = this.props.players || []
    return (
      <GridLayout rows={[2, 6, 2]} columns={[6, 4]}>
        <GridCell area={[1, 1, 2, 2]} place="start">
          <LobbyTitle>
            Who is playing?
          </LobbyTitle>
        </GridCell>
        <GridCell area={[2, 1, 3, 3]} place='start'>
          <PlayerList players={players}
            onPlayerRemove={this.onPlayerRemove} />
        </GridCell>
        <GridCell area={[3, 1, 4, 2]} place='center' padding={5}>
          <NewPlayerInput onSubmit={this.addPlayer}/>
        </GridCell>
        <GridCell area={[3, 2, 4, 3]} place='center'>
          <RoundButton small blue onClick={onQuit}>&times;</RoundButton>
          <NextButton onClick={onContinue} />
        </GridCell>
      </GridLayout>
    )
  }
}

class NewPlayerInput extends Component {
  constructor () {
    super()

    this.state = {
      text: ''
    }
  }

  onInput = (text) => {
    this.setState({text: text})
  }

  onSubmit = () => {
    this.props.onSubmit(this.state.text)
    this.setState({text: ''})
  }

  render () {
    const {error, onSubmit} = this.props

    return (
      <TextInput type="text"
        blurOnSubmit={false}
        // autoFocus
        value={this.state.text}
        error={error}
        onChangeText={this.onInput}
        placeholder="new player name"
        onSubmitEditing={this.onSubmit} />
    )
  }
}

export { GamePlayers }
