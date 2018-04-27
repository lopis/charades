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
      words: shuffle(this.state.words)
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
    const {round = -1, players} = this.state
    const nextRound = round + 1
    this.setState(() => ({
      round: nextRound,
      score: 0,
      player1: players[nextRound],
      player2: players[(nextRound+1) % players.length],
    }), () => {
      this.forceUpdate()
      this.props.transition('NEXT_ROUND')
    })
  }

  nextWord = () => {
    if (this.state.words.length === 0) {
      this.props.transition('LAST_WORD')
    }

    this.setState(() => {
      const words = this.state.words
      const nextWord = words.pop()

      return {
        word: nextWord,
        words: words
      }
    })
  }

  skipWord = () => {
    this.setState(() => {
      const currentWord = this.state.word
      currentWord.bonus = (currentWord.bonus || 0) + 1
      currentWord.state = 'skipped'

      return {
        words: [currentWord].concat(this.state.words),
        score: this.state.score -1
      }
    }, this.nextWord)
  }

  guessWord = () => {
    const currentWord = this.state.word
    currentWord.state = 'guessed'
    const usedWords = this.state.usedWords || []

    this.setState(() => ({
      usedWords: usedWords.concat([currentWord]),
      score: this.state.score + 1 + (currentWord.bonus || 0)
    }), this.nextWord)
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
    const Element = this.getGameComponent()
    if (!Element) return (
      <div>
        <h1>{this.props.machineState.value}</h1>
        <h2>Loading...</h2>
      </div>
    )

    console.log('render', Element, this.state);

    return (
      <Element onContinue={this.onContinue}
        {...this.props}
        {...this.state}
      />
    )
  }
}

export default withStatechart(game, { devTools: true })(GameManager)
