import React, { PureComponent } from 'react'
import { withStatechart } from 'react-automata'

import lobby from '../helpers/statecharts/lobby'
import {
  GamePlayers,
  GameWords,
  GamePlay,
  GameEnd
} from '../components/game'


class GameLobby extends PureComponent {
  constructor (props) {
    super()

    this.state = {
      players: props.players || [],
      words: props.words || [],
    }

    if (props._debugSkipIntro) {
      props.transition('SKIP_INTRO')
    }
  }

  startGame = () => {
    this.setState({
      players: this.props.players || [],
      words: this.props.words || [],
    })

    if (props._debugSkipIntro) {
      props.transition('SKIP_INTRO')
    }
  }

  gameComponentMap = {
    GAME_PLAYERS: GamePlayers,
    GAME_WORDS: GameWords,
    GAME_PLAY: GamePlay,
    GAME_END: GameEnd,
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

  createWord = () => {
    this.setState({
      words: this.state.words.concat([{
        id: Date.now(),
        name: this.props.word
      }])
    })
  }

  removeWord = () => {
    this.setState({
      words: this.state.words.filter(p => {
        return p.id != this.props.wordId
      })
    })
  }

  onContinue = () => {
    this.props.transition('CONTINUE')
  }

  quitGame = () => {
    this.props.stopGame()
  }

  render() {
    const element = this.getGameComponent()
    if (!element) return null

    return React.createElement(element, {
      onContinue: this.onContinue,
      ...this.props,
      ...this.state
    })
  }
}

export default withStatechart(lobby, { devTools: true })(GameLobby)
