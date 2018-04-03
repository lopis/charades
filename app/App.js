import React, { PureComponent } from 'react'
import mainMenu from './pages/lobby/mainMenu'

export default class App extends PureComponent {
  getPage = () => {
    return mainMenu()
  }

  render () {
    return this.getPage()
  }
}
