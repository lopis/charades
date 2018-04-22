import React from 'react'
import { appStates } from '../constants/appStates'
import MainMenu from '../pages/lobby/MainMenu'
import Game from '../pages/game/Game'

export const getCurrentPage = (appState = '') => {
  switch (appState) {
    case appStates.GAME_START:
    case appStates.GAME_END:
      return <Game />

    case appStates.MAIN_MENU:
    default:
      return <MainMenu />
  }
}
