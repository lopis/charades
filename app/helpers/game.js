import React from 'react'
import { appStates } from '../constants/appStates'
import MainMenu from '../pages/lobby/MainMenu'
import Game from '../pages/game/Game'
import emoji from '../assets/words/emoji.en.json'
import geography from '../assets/words/geography.en.json'

export function getCurrentPage (appState = '') {
  switch (appState) {
    case appStates.GAME_START:
    case appStates.GAME_END:
      return <Game />

    case appStates.MAIN_MENU:
    default:
      return <MainMenu />
  }
}

export function wordPackFetcher (Component) {
  return class extends React.Component {
    constructor() {
      super()
      this.state = {}
    }

    formatWord = (word, i) => {
      return {
        id: i,
        name: word
      }
    }

    formatPack = (wordPack) => {
      return Object.assign({}, wordPack, {
        words: wordPack.words.map(this.formatWord)
      })
    }

    formatAll = (wordPacks) => {
      return wordPacks.map(this.formatPack)
    }

    // Should fetch them eventually
    componentDidMount() {
      this.setState({
        wordPacks: this.formatAll([emoji, geography])
      })
    }

    render() {
      return <Component {...this.state} {...this.props}/>
    }
  }
}
