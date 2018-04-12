export const gameStates = [
  'GAME_START',
  'GAME_END',
].reduce((acc, value) => (
  Object.assign(acc, {[value]: value})
), {})
