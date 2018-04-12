import React from 'react'
import { gameStates } from '../constants/gameStates'
import MainMenu from '../pages/lobby/MainMenu'
import GameLobby from '../pages/game/GameLobby'

export const getCurrentPage = (gameState = '') => {
  console.log(gameState);
  switch (gameState) {
    case gameStates.GAME_START:
    case gameStates.GAME_END:
      return <GameLobby />

    default:
      return <MainMenu />
  }
}
