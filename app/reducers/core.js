import { Map } from 'immutable'

import { types } from '../actions'
import { gameStates } from '../constants/gameStates'

const core = (state = [], action) => {
  let newState

  switch (action.type) {
    case types.GAME_START:
      newState = {
        ...state,
        gameState: gameStates.GAME_START
      }
      break
    case types.CREATE_PLAYER:
    case types.UPDATE_PLAYER:
      const playerId = action.playerId || Date.now()
      newState = {
        ...state,
        players: (state.players || []).concat([{
          name: action.playerName,
          id: playerId,
        }])
      }
      break

    default:
      newState = state
  }

  return newState
}

export default core
