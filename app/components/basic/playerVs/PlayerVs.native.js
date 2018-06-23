import React from 'react'
import { View, Text } from 'react-native'

import { Bold } from '../../basic'

const PlayerVs = ({player1, player2}) => {
  const fontSize = player1.length + player2.length > 15 ? '4vw' : '8vw'

  return (
    <View style={{fontSize: fontSize}}>
      <Bold>{player1.name}</Bold><Text> & </Text><Bold>{player2.name}</Bold>
    </View>
  )
}
