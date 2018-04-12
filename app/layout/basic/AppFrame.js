import { getCurrentPage } from '../../helpers/game'

const AppFrame = ({gameState}) => {
  return getCurrentPage(gameState)
}

export default AppFrame
