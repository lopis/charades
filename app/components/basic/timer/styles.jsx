import { css } from 'styled-components'
import colors from '../../../constants/colors'

const timer = css`
  display: grid;
  grid-template: 50% 100% / 50% 100%;
  height: 50vw;
  width: 50vw;
  border-radius: 80vw;
  border: 2vw solid;
  place-items: end;
  font-size: 12vw;
  position: absolute;
  bottom: -25vw;
  right: -25vw;
  box-sizing: border-box;
  text-align: center;
`

const timerContainer = css`
  place-self: end;
  position: relative;
  margin: -1vw;
  height: 25vw;
  width: 25vw;
  overflow: hidden;
`

export {timer}
export {timerContainer}
