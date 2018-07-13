import React from 'react'
import { View, Text } from 'react-native'

import { PlayerLabel } from '../../basic'

export const PlayerVs = ({player1, player2}) => {
  const fontSize = player1.length + player2.length > 15 ? 28 : 64
  const props = {
    style: {fontSize: fontSize}
  }

  return (
    <View style={{width: '100%'}}>
      <PlayerLabel player={player1} big />
      <PlayerLabel player={player2} big reverse/>
    </View>
  )
}
