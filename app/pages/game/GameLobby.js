import React from 'react';
import { connect } from 'react-redux'
import { play, store, account } from '../../actions/menu'

import GameLobbyLayout from '../../layout/game/GameLobbyLayout'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

const GameLobby = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameLobbyLayout)

export default GameLobby
