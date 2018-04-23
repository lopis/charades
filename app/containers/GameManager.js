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
    this.setState({
      phase: 0,
      round: 0,
      player1: null,
      player2: null,
    })
  }

  nextPhase = () => {
    this.setState(() => ({
      phase: this.state.phase++,
      round: 0,
      player1: null,
      player2: null,
    }))
  }

  shufflePlayers = () => {
    this.setState(() => ({
      players: shuffle(this.state.players)
    }))
  }

  shufflyWords = () => {
    this.setState(() => ({
      words: shuffle(this.state.words)
    }))
  }

  nextPlayers = () => {
    const {round, players} = this.state
    const nextRound = this.state.round++
    this.setState(() => ({
      round: nextRound,
      player1: players[nextRound],
      player2: players[(nextRound+1) % players.length],
    }))
  }

  nextWord = () => {
    const words = this.state.words
    const nextWord = words.pop()

    this.setState(() => ({
      word: nextWord,
      words: words,
      // usedWords: usedWords.concat([nextWord])
    }))
  }

  skipWord = () => {
    console.log('skipWord');
    const currentWord = this.state.word
    currentWord.state = 'skipped'

    this.setState(() => {
      words: this.state.words.concat([currentWord])
    }, this.nextWord)
  }

  guessWord = () => {
    console.log('guessWord');
    const currentWord = this.state.word
    currentWord.state = 'guessed'
    const usedWords = this.state.usedWords || []

    this.setState(() => {
      usedWords: usedWords.concat([currentWord])
    }, this.nextWord)
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
