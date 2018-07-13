import React, {Component} from 'react'
import { TouchableNativeFeedback } from 'react-native'

import { GridRepeatLayout, PlayerLabel} from '../../basic'

class PlayerList extends Component {
  shouldComponentUpdate (nextProps) {
    return this.props.players.length != nextProps.players.length
  }

  render () {
    const {players, onPlayerRemove} = this.props

    return (
      <GridRepeatLayout template={[1, 3]}>
        {players.map((player, i) => (
          <PlayerLabel type="text"
            key={player.id}
            player={player}
            value={'×'}
            onClick={() => onPlayerRemove(player.id)}>
          </PlayerLabel>
        ))}
      </GridRepeatLayout>
    )
  }
}

export { PlayerList }
