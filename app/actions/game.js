import { types } from './types'

export const createPlayer = (playerName) => ({
  type: types.CREATE_PLAYER,
  playerName: playerName
})
export const updatePlayer = (playerName, playerId) => ({
  type: types.UPDATE_PLAYER,
  playerId: playerId,
  playerName: playerName
})
