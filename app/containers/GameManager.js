import React, { PureComponent } from 'react'
import { withStatechart } from 'react-automata'

import game from '../helpers/statecharts/game'
import {
  ReadyPlayers,
  ShowWord,
  RoundResults
} from '../components/game'
import shuffle from '../helpers/shuffle'

class GameManager extends PureComponent {
  constructor (props) {
    super()

    this.state = {
      players: props.players || [],
      words: props.words || [],
    }
  }

  componentDidMount () {
    this.setState(() => ({
      players: shuffle(this.state.players),
      words: shuffle(this.state.words),
      player1: this.state.players[0],
      player2: this.state.players[1],
    }), () => {
      this.props.transition('CONTINUE')
    })
  }

  resetPhase = () => {
    console.log('resetPhase');
  }

  shufflePlayers = () => {
    console.log('shufflePlayers');
  }

  shufflyWords = () => {
    console.log('shufflyWords');
  }

  nextPlayers = () => {
    console.log('nextPlayers');
  }

  gameComponentMap = {
    READY_PLAYERS: ReadyPlayers,
    SHOW_WORD: ShowWord,
    SHOW_ROUND_RESULTS: RoundResults
  }

  getGameComponent = () => {
    return this.gameComponentMap[this.props.machineState.value]
  }
  onContinue = () => {
    this.props.transition('CONTINUE')
  }

  quitGame = () => {
    this.props.stopGame()
  }

  render() {
    const element = this.getGameComponent()
    if (!element) return (
      <div>
        <h1>{this.props.machineState.value}</h1>
        <h2>Loading...</h2>
      </div>
    )

    return React.createElement(element, {
      onContinue: this.onContinue,
      ...this.props,
      ...this.state
    })
  }
}

export default withStatechart(game, { devTools: true })(GameManager)
