export const types = [
  // MENU ACTIONS
  'MENU_PLAY',
  'MENU_STORE',
  'MENU_PACCOUNT',

  // GAME FLOW
  'GAME_START'
].reduce((acc, value) => (
  Object.assign(acc, {[value]: value})
), {})
