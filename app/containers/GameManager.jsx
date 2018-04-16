import React, { PureComponent } from 'react'
import { withStatechart } from 'react-automata'

import statechart from '../helpers/statechart'
import {
  GameLobby,
  GameWords,
  GamePlay,
  GameEnd
} from '../components/game'


class GameManager extends PureComponent {
  constructor (props) {
    super()

    this.state = {
      players: props.players || [],
      words: props.words || [],
    }
  }
  gameComponentMap = {
    GAME_LOBBY: GameLobby,
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
    console.log('createWord');
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

  render() {
    const element = this.getGameComponent()
    return React.createElement(element, {
      onContinue: this.onContinue,
      ...this.props,
      ...this.state
    })
  }
}

export default withStatechart(statechart, { devTools: true })(GameManager)
