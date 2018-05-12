import React, {PureComponent} from 'react'

import styles from './styles'

const START_TIME = 60
const REFRESH_RATE = 10 * 1000
const TICK = 1

class Timer extends PureComponent {
  constructor(props) {
    super()

    this.state = {
      time: START_TIME,
      timer: null
    }
  }

  componentDidMount() {
    this.setState(state => ({
      timer: this.getTimer(),
      time: START_TIME
    }))
  }

  componentWillUnmount() {
    clearTimeout(this.state.timer)
  }

  getTimer = () => {
    return setInterval(this.tick, REFRESH_RATE)
  }

  tick = () => {
    this.setState(state => ({
      time: state.time - TICK
    }), this.checkTimeout)
  }

  checkTimeout = () => {
    if (this.state.time <= 0) {
      this.props.onTimeout()
    }
  }

  render() {
    return (
      <div style={styles}>
        <span>{this.state.time}</span>
      </div>
    )
  }
}

export { Timer }
