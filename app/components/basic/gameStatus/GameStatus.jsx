import React from 'react'

export const GameStatus = props => {
  const {
    player1,
    player2,
    score,
    round,
    phase
  } = props

  return (
    <div>
      <div>Players</div>
      <div>
        <strong>{player1.name}</strong> | <strong>{player2.name}</strong>
      </div>
      <div><span>{score}</span> pts | round {round} | phase {phase}</div>
    </div>
  )
}
