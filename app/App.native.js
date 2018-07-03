import React from 'react'
import { Image, Text, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { AppRegistry } from 'react-native'

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

const AppContainer = () => (
  <Provider store={store}>
    {/* <App /> */}
    <View style={{borderColor: 'cyan', borderWidth: 5, height: '100%', width: '100%'}}>
      <Image source={{uri: require('./assets/img/arrow.png')}}
        resizeMode="contain"
        style={{height: 100, width: 100, borderColor: 'red', borderWidth: 5}} />
    </View>
  </Provider>
)

AppRegistry.registerComponent('Charades', () => AppContainer)
