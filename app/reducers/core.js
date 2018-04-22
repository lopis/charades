import { Map } from 'immutable'

import { types } from '../actions'
import { appStates } from '../constants/appStates'

const core = (state = [], action) => {
  let newState

  switch (action.type) {
    case types.MAIN_MENU:
    case types.GAME_START:
      newState = {
        ...state,
        appState: appStates[action.type]
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
    case types.REMOVE_PLAYER:
      newState = {
        ...state,
        players : players.filter(p => p.id != action.playerId)
      }

    default:
      newState = state
  }

  return newState
}

export default core
