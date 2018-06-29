import { css } from 'styled-components'
import colors from '../../../constants/colors'

const container = css`
  padding: 1vw;
  box-shadow: 0.5vw 0.5vw 0 0 rgba(0,0,0,0.2);
  width: 20vw;
  height: 20vw;
  margin: 1vw;
  box-sizing: border-box;
  background: linear-gradient(to right top, ${colors.dark}, ${colors.highlight});
  place-items: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`

const name = css`
  color: white;
  margin: 2vw 0;
`

const pictureContainer = css`
  height: 10vw;
  width: 100%;
  flex-grow: 1;
  display: flex;
  place-content: center;
  place-items: center;
`

const picture = css`
  height: 10vw;
  width: 10vw;
  background: white;
  border-radius: 20vw;
  margin: 1vw;
`

export { container }
export { name }
export { pictureContainer }
export { picture }
