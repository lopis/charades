import React, { PureComponent } from 'react'

import {
  GridLayout,
  GridCell,
  RoundButton,
  LobbyTitle,
  Button,
  WordPackLabel
} from '../basic'
import { TextInput } from '../input'
import * as game from '../../helpers/game'
import { filterWords } from '../../helpers/shuffle'

class GameWordsComponent extends PureComponent {
  selectWordPack = (pack = {}) => {
    console.log('pack', pack);
    if (pack.words && pack.words.length > 0) {
      this.props.transition(
        'SELECT_WORDS',
        {words: filterWords(pack.words, this.props.players)}
      )
    }
  }

  renderWordPacks = () => {
    const packs = this.props.wordPacks || []
    return packs.map((pack, i) => (
      <WordPackLabel type="text"
        key={i}
        title={pack.name}
        description={pack.decription}
        onClick={() => this.selectWordPack(pack)} />
    ))
  }

  render () {
    const {machineState, onContinue, onQuit} = this.props
    return (
      <GridLayout rows={[2, 8]} columns={[6]}>
        <GridCell area={[1, 1, 2, 2]}>
          <LobbyTitle>
            Pick a word pack
          </LobbyTitle>
        </GridCell>
        <GridCell area={[2, 1, 4, 2]} place="start"
          style={{maxHeight: '100%', display: 'flex', overflow: 'auto', flexWrap: 'wrap'}}>
          {this.renderWordPacks()}
          {this.renderWordPacks()}
          {this.renderWordPacks()}
          {this.renderWordPacks()}
          {this.renderWordPacks()}
        </GridCell>
        <GridCell area={[3, 2, 4, 3]}>
          <RoundButton small blue onClick={onQuit}>&times;</RoundButton>
          <RoundButton disabled onClick={onContinue}>→</RoundButton>
        </GridCell>
      </GridLayout>
    )
  }
}

// const GameWords = game.wordPackFetcher(GameWordsComponent)
const GameWords = GameWordsComponent

export { GameWords }
