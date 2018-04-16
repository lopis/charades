import { types } from './types'

export const createPlayer = (playerName) => ({
  type: types.CREATE_PLAYER,
  playerName: playerName
})
export const updatePlayer = (playerName) => ({
  type: types.UPDATE_PLAYER,
  playerId: playerId,
  playerName: playerName
})
export const removePlayer = (playerName, playerId) => ({
  type: types.REMOVE_PLAYER,
  playerId: playerId,
})
