import React from 'react';
import { connect } from 'react-redux'

import { createPlayer, updatePlayer } from '../../actions'
import GameManager from '../../containers/GameManager'

const mapStateToProps = ({players}) => ({
  players
})

const mapDispatchToProps = dispatch => ({
  createPlayer: (playerName) => {
    dispatch(createPlayer(playerName))
  },
  updatePlayer: (playerName) => {
    dispatch(updatePlayer(playerName))
  }
})

const Game = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameManager)

export default Game
