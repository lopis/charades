import { getCurrentPage, wordPackFetcher } from '../../helpers/game'

const AppFrame = ({appState}) => {

  return getCurrentPage(appState)
}

export default AppFrame
