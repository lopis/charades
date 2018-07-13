import { css } from 'styled-components'
import colors from '../../../constants/colors'

const timerBody = css`
  height: 400px;
  width: 400px;
  border: 16px solid ${colors.darkest};
  border-radius: 200px;
  padding: 50px;
`

const text = css`
  font-size: 120px;
  text-align: right;
  color: ${colors.darker};
`

const textContainer = css`
  width: 50%;
  padding-right: 15px;
`

const timerContainer = css`
  height: 200px;
  width: 200px;
  overflow: hidden;
`

export {timerBody}
export {text}
export {textContainer}
export {timerContainer}
