import React from 'react';
import { connect } from 'react-redux'

import { createPlayer, removePlayer } from '../../actions'
import GameManager from '../../containers/GameManager'

const mapStateToProps = ({players, words}) => ({
  players,
  words
})

const mapDispatchToProps = dispatch => ({

})

const Game = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameManager)

export default Game
