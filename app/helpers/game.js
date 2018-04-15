import React from 'react'
import { gameStates } from '../constants/gameStates'
import MainMenu from '../pages/lobby/MainMenu'
import Game from '../pages/game/Game'

export const getCurrentPage = (gameState = '') => {
  console.log(gameState);
  switch (gameState) {
    case gameStates.GAME_START:
    case gameStates.GAME_END:
      return <Game />

    default:
      return <MainMenu />
  }
}
