import React, { PureComponent } from 'react'
import { withStatechart } from 'react-automata'

import game from '../helpers/statecharts/game'
import {
  ReadyPlayers,
  ShowWord,
  RoundResults,
  PhaseResults
} from '../components/game'
import shuffle from '../helpers/shuffle'

class GameManager extends PureComponent {
  constructor (props) {
    super()

    this.state = {
      players: props.players || [],
      words: props.words || [],
      scoreboard: {
        phases: {
          1: [],
          2: [],
          3: []
        }
      }
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

  componentDidTransition(prevStateMachine, event) {
    console.log(`${prevStateMachine.value} > ${event} > ${this.props.machineState.value}`)
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
    this.setState(({phase}, props) => ({
      phase: phase + 1,
      round: -1,
      player1: null,
      player2: null,
      words: props.words
    }))
  }

  endRound = () => {
    this.setState(() => {
      const {scoreboard, phase, player1, player2, score} = this.state
      const phaseScore = scoreboard.phases[phase] || {}

      return {
        scoreboard: Object.assign({}, scoreboard, {
          phases: {
            [phase]: {
              [player1.id]: (phaseScore[player1.id] || 0) + score,
              [player2.id]: (phaseScore[player2.id] || 0) + score
            }
          },
          score: 0
        })
      }
    })
  }

  shufflePlayers = () => {
    this.setState(({players}) => ({
      players: shuffle(players)
    }))
  }

  shufflyWords = () => {
    this.setState(({words}) => ({
      words: shuffle(words)
    }))
  }

  nextPlayers = () => {
    this.setState((state) => {
      const {round = -1, players} = state
      const nextRound = round + 1

      return {
        round: nextRound,
        score: 0,
        player1: players[nextRound],
        player2: players[(nextRound+1) % players.length],
      }
    }, () => {
      this.props.transition('NEXT_ROUND')
    })
  }

  nextWord = () => {
    if (this.state.words.length === 0) {
      this.props.transition('LAST_WORD')
    }

    this.setState(({words}) => {
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
    SHOW_ROUND_RESULTS: RoundResults,
    SHOW_PHASE_RESULTS: PhaseResults
  }

  getGameComponent = () => {
    return this.gameComponentMap[this.props.machineState.value]
  }

  onContinue = () => {
    this.props.transition('CONTINUE', this.state)
  }
  onQuit = () => {
    this.props.transition('QUIT_GAME', this.state)
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

    return (
      <Element
        {...this.props}
        {...this.state}
        onContinue={this.onContinue}
        onQuit={this.onQuit}
      />
    )
  }
}

export default withStatechart(game, { devTools: true })(GameManager)
