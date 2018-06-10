import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { appStates } from './constants/appStates'
import reducer from './reducers/core'

import App from './App'

const preloadedState = {
  appState: appStates.MAIN_MENU,
  // _debugSkipIntro: true,
  players: [
    {id: 'p1', name: 'Muffintop'},
    {id: 'p2', name: 'Jellybean'},
    {id: 'p3', name: 'Cinnamon'},
  ]
}
const store = createStore(reducer, preloadedState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
