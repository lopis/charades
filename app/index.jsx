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
    {id: 1, name: 'John'},
    {id: 2, name: 'Mary'},
    {id: 3, name: 'Alex'},
  ],
  words: [
    {id: 1, name: 'dog'},
    {id: 2, name: 'cat'},
    {id: 3, name: 'pig'},
    {id: 4, name: 'cow'},
    {id: 5, name: 'duck'},
    {id: 6, name: 'horse'},
    {id: 7, name: 'fish'},
    {id: 8, name: 'lion'},
  ]
}
const store = createStore(reducer, preloadedState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
