import React from 'react';
import { connect } from 'react-redux'

import { goToMainMenu } from '../../actions'
import GameLobby from '../../containers/GameLobby'

// These players and words might come from external lists
// But the game manager keeps its own internal listss
const mapStateToProps = ({players, words, _debugSkipIntro}) => ({
  players,
  words,
  _debugSkipIntro
})

const mapDispatchToProps = dispatch => ({
  stopGame: () => dispatch(goToMainMenu)
})

const Game = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameLobby)

export default Game
