import React from 'react'
import { View, Text } from 'react-native'

import { Bold } from '../../basic'

export const PlayerVs = ({player1, player2}) => {
  const fontSize = player1.length + player2.length > 15 ? 28 : 64
  const props = {
    style: {fontSize: fontSize}
  }

  return (
    <View>
      <Bold>{player1.name}</Bold>
      <Text>&</Text>
      <Bold>{player2.name}</Bold>
    </View>
  )
}
