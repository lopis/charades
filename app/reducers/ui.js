import { Map } from 'immutable'

import { types } from '../actions'

const initialState = new Map({
  menuOpen: false
})

const ui = (state = initialState, action) => {
  let newState

  switch (action.type) {
    // UI
    case types.MENU_CLICK:
      newState = state.setIn(['menuOpen'], !state.get('menuOpen'))
      break

    default:
      newState = state
  }

  return newState
}

export default ui
