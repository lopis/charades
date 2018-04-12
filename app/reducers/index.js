import { combineReducers } from 'redux-immutable'

import core from './core'
import ui from './ui'

export default combineReducers({
  ui,
  core
})
