import React, { PureComponent } from 'react'

import {
  GridLayout,
  GridCell,
  RoundButton,
  NextButton,
  LobbyTitle,
  Button,
  WordPackList,
} from '../basic'
import { TextInput } from '../input'
import * as game from '../../helpers/game'
import { filterWords } from '../../helpers/shuffle'
import emoji from '../../assets/words/emoji.en.json'
import geography from '../../assets/words/geography.en.json'
import nouns from '../../assets/words/nouns.en.json'
import phobias from '../../assets/words/phobias.en.json'

class GameWordsComponent extends PureComponent {
  selectWordPack = (pack = {}) => {
    if (pack.words && pack.words.length > 0) {
      this.props.transition(
        'SELECT_WORDS',
        {words: filterWords(pack.words, this.props.players)}
      )
    }
  }

  render () {
    const {machineState, onContinue, onQuit} = this.props
    return (
      <GridLayout rows={[2, 6, 2]} columns={[6, 4]}>
        <GridCell area={[1, 1, 2, 2]} place="start">
          <LobbyTitle>
            Pick a word pack
          </LobbyTitle>
        </GridCell>
        <GridCell area={[2, 1, 3, 3]} place="start">
          <WordPackList wordPacks={this.props.wordPacks}
            selectWordPack={this.selectWordPack} />
        </GridCell>
        <GridCell area={[3, 2, 4, 3]}>
          <RoundButton small blue onClick={onQuit}>&times;</RoundButton>
          <NextButton disabled onClick={onContinue}/>
        </GridCell>
      </GridLayout>
    )
  }
}

// const GameWords = game.wordPackFetcher(GameWordsComponent)
// const GameWords = GameWordsComponent

class GameWords extends PureComponent {
  constructor () {
    super ()

    this.state = {isFetched: false}
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
      wordPacks: this.formatAll([emoji, geography, nouns, phobias, emoji, geography, nouns, phobias]),
      isFetched: true
    })
  }

  render() {
    if (this.state.isFetched) {
      return <GameWordsComponent {...this.state} {...this.props}/>
    } else {
      return null
    }
  }
}

export { GameWords }
