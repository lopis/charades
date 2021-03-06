import React, {PureComponent} from 'react'
import { Text } from 'react-native'
import s from 'styled-components'

import { timerBody, text, textContainer, timerContainer } from './styles'
import { SECONDS_PER_ROUND } from '../../../constants/values'

const START_TIME = SECONDS_PER_ROUND
const REFRESH_RATE = 1000
const TICK = 1

const TimerContainer = s.View`${timerContainer}`
const TimerBody = s.View`${timerBody}`
const TimerTextContainer = s.View`${textContainer}`
const TimerText = s.Text`${text}`

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
          <TimerTextContainer>
            <TimerText>{this.state.time}</TimerText>
          </TimerTextContainer>
        </TimerBody>
      </TimerContainer>
    )
  }
}

export { Timer }
