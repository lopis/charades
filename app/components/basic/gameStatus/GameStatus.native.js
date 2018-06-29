import React from 'react'
import { View, Text } from 'react-native'

import { Bold } from '../../basic'

export const GameStatus = props => {
  const {
    player1,
    player2,
    score,
    round,
    phase
  } = props

  return (
    <View>
      <View><Text>Players</Text></View>
      <View>
        <Bold>{player1.name}</Bold><Text>|</Text><Bold>{player2.name}</Bold>
      </View>
      <View>
        <Text>{score} pts | round {round} | phase {phase}</Text>
      </View>
    </View>
  )
}
