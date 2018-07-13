import React from 'react'
import { Image, Text, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { AppRegistry } from 'react-native'
import css from 'styled-components'
import arrow from './assets/img/arrow.png'

import './helpers/globalStyle'
import { appStates } from './constants/appStates'
import { connect } from 'react-redux'
import AppFrame from './layout/basic/AppFrame'
import reducer from './reducers/core'

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

const mapStateToProps = ({appState}) => ({
  appState
})

const App = connect(
  mapStateToProps,
  null
)(AppFrame)

const getCircularReplacer = () => {
  const seen = new WeakSet;
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

const jsone = obj => {
  return null
}

const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('Charades', () => AppContainer)
