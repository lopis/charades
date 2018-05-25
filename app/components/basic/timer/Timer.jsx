import React, {PureComponent} from 'react'
import s from 'styled-components'

import {timer, timerContainer} from './styles'

const START_TIME = 60
const REFRESH_RATE = 1 * 1000
const TICK = 1

const TimerContainer = s.div`${timerContainer}`
const TimerBody = s.div`${timer}`

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
      <TimerContainer>
        <TimerBody>
          <span>{this.state.time}</span>
        </TimerBody>
      </TimerContainer>
    )
  }
}

export { Timer }
