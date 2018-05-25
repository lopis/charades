import React, { PureComponent } from 'react'
import { withStatechart } from 'react-automata'

import lobby from '../helpers/statecharts/lobby'
import {
  GamePlayers,
  GameWords,
  GameEnd
} from '../components/lobby'
import GameManager from './GameManager'

class GameLobby extends PureComponent {
  constructor (props) {
    super()

    this.state = {}
  }

  gameComponentMap = {
    GAME_PLAYERS: GamePlayers,
    GAME_WORDS: GameWords,
    GAME_PLAY: GameManager,
    GAME_END: GameEnd,
  }

  selectWords = () => {
    this.setState(() => ({
      players: this.props.players || [],
      words: this.props.words,
    }), this.onContinue)
  }

  getGameComponent = () => {
    return this.gameComponentMap[this.props.machineState]
  }

  createPlayer = () => {
    this.setState({
      players: this.state.players.concat([{
        id: Date.now(),
        name: this.props.newPlayerName
      }])
    })
  }

  removePlayer = () => {
    this.setState({
      players: this.state.players.filter(p => {
        return p.id != this.props.playerId
      })
    })
  }

  onContinue = () => {
    this.props.transition('CONTINUE')
  }

  onQuit = () => {
    this.props.stopGame()
  }

  render() {
    const element = this.getGameComponent()
    if (!element) return null

    return React.createElement(element, {
      onContinue: this.onContinue,
      onQuit: this.onQuit,
      ...this.props,
      ...this.state
    })
  }
}

export default withStatechart(lobby, { devTools: true })(GameLobby)
