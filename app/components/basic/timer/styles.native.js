import { css } from 'styled-components'
import colors from '../../../constants/colors'

const timer = css`
  height: 400px;
  width: 400px;
  border: 16px solid ${colors.darkest};
  border-radius: 200px;
  padding: 50px;
`

const text = css`
  font-size: 120px;
  color: ${colors.darker};
`

const timerContainer = css`
  height: 200px;
  width: 200px;
  overflow: hidden;
`

export {timer}
export {text}
export {timerContainer}
