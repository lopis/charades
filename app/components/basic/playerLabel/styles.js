import { css } from 'styled-components'
import colors from '../../../constants/colors'

const container = css`
  padding: 1vw;
  box-shadow: 5px 5px 5px 0 rgba(0,0,0,0.2);
  display: flex;
  width: 30vw;
  box-sizing: border-box;
  margin: 1vw;
  border-radius: 50px 5px 5px 50px;
  border: 5px solid ${colors.dark};
  place-items: center;
`

const name = css`
  color: ${colors.dark};
`

const picture = css`
  height: 5vw;
  width: 5vw;
  border-radius: 3vw;
  background: ${colors.dark};
  margin-right: 1vw;
`

const badge = css`
  background: white;
  color: ${colors.darkest}
`

export { container }
export { name }
export { picture }
export { badge }
