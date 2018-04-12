import { connect } from 'react-redux'
import AppFrame from './layout/basic/AppFrame'

const mapStateToProps = ({gameState}) => ({
  gameState
})

const App = connect(
  mapStateToProps,
  null
)(AppFrame)

export default App
