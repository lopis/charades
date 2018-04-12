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

    default:
      newState = state
  }

  return newState
}

export default core
