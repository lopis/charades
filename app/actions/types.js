export const types = [
  // MENU ACTIONS
  'MAIN_MENU',
  'MENU_PLAY',
  'MENU_STORE',
  'MENU_PACCOUNT',

  // GAME FLOW
  'GAME_START',
  'CREATE_PLAYER',
  'UPDATE_PLAYER',
  'REMOVE_PLAYER',
].reduce((acc, value) => (
  Object.assign(acc, {[value]: value})
), {})
