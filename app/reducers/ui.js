import { Map } from 'immutable'

import { actionTypes } from '../actions'

const initialState = new Map({
  menuOpen: false
})

const reducer = (state = initialState, action) => {
  let newState

  switch (action.type) {
    // UI
    case actionTypes.MENU_CLICK:
      newState = state.setIn(['menuOpen'], !state.get('menuOpen'))
      break

    default:
      newState = state
  }

  return newState
}

export default reducer
