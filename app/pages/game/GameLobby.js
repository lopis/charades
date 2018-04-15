import React from 'react';
import { connect } from 'react-redux'
import { createPlayer, updatePlayer } from '../../actions'

import GameLobbyLayout from '../../layout/game/GameLobbyLayout'

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

const GameLobby = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameLobbyLayout)

export default GameLobby
