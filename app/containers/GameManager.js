import React, { PureComponent } from 'react'
import { withStatechart } from 'react-automata'
import { Map } from 'immutable'

import game from '../helpers/statecharts/game'
import {
  PhaseResults,
  ReadyPlayers,
  RoundResults,
  ShowWord,
} from '../components/game'
import {
  getGuessWordState,
  getInitialState,
  getNextPhaseState,
  getNextPlayersState,
  getNextWordState,
  getScoreUpdateState,
  getSkipWordState,
} from '../helpers/gameStateMutations'

class GameManager extends PureComponent {
  constructor (props) {
    super()

    const initialState = getInitialState(props)

    this.state = {
      ...initialState,
      ...getNextPlayersState(initialState)
    }
  }

  componentDidTransition(prevStateMachine, event) {
    console.log(`Transition: ${prevStateMachine.value} > ${event} > ${this.props.machineState.value}`)
  }

  nextPhase = () => {
    this.setState(getNextPhaseState, this.nextPlayers)
  }

  endRound = () => {
    this.setState(getScoreUpdateState)
  }

  nextPlayers = () => {
    this.setState(getNextPlayersState, () => {
      this.props.transition('NEXT_ROUND')
    })
  }

  nextWord = () => {
    this.setState(getNextWordState)
  }

  skipWord = () => {
    this.setState(getSkipWordState, this.nextWord)
  }

  guessWord = () => {
    this.setState(getGuessWordState, this.nextWord)
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

  onTransition = (action, options = {}) => {
    this.props.transition(action, {
      ...this.state,
      ...options
    })
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
        transition={this.onTransition}
      />
    )
  }
}

export default withStatechart(game, { devTools: true })(GameManager)
