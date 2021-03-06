import { css } from 'styled-components'
import colors from '../../../constants/colors'

const container = css`
  padding: 1vw;
  box-shadow: 0.5vw 0.5vw 0.5vw 0 rgba(0,0,0,0.2);
  display: flex;
  width: 30vw;
  box-sizing: border-box;
  margin: 1vw;
  border-radius: 5vw 0.5vw 0.5vw 5vw;
  border: 0.5vw solid ${colors.dark};
  place-items: center;
`

const name = css`
  color: ${colors.dark};
  flex-grow: 1;
`

const picture = css`
  height: 5vw;
  width: 5vw;
  border-radius: 3vw;
  background: ${colors.dark};
  margin-right: 1vw;
`

const badge = css`
  background: ${colors.darkest};
  color: white;
  border-radius: 5vw;
  width: 5vw;
  height: 5vw;
  text-align: center;
  line-height: 5vw;
  font-size: 0.7em;
`

export { container }
export { name }
export { picture }
export { badge }
