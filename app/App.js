import { connect } from 'react-redux'
import AppFrame from './layout/basic/AppFrame'

const mapStateToProps = ({appState}) => ({
  appState
})

const App = connect(
  mapStateToProps,
  null
)(AppFrame)

export default App
