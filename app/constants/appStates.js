export const appStates = [
  'GAME_START',
  'GAME_END',
  'MAIN_MENU'
].reduce((acc, value) => (
  Object.assign(acc, {[value]: value})
), {})
