import React from 'react'
import { Bold } from '../../basic'

export const PlayerVs = ({player1, player2}) => {
  const fontSize = player1.length + player2.length > 15 ? '4vw' : '8vw'

  return (
    <div style={{fontSize: fontSize}}>
      <Bold>{player1.name}</Bold> & <Bold>{player2.name}</Bold>
    </div>
  )
}
