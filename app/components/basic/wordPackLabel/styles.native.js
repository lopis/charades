import { css } from 'styled-components'
import colors from '../../../constants/colors'

const container = css`
  padding: 10px;
  width: 100px;
  height: 100px;
  margin: 8px;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: ${colors.dark};
`

const name = css`
  flex-grow: 1;
  margin: 8px 0;
  font-size: 16px;
  color: white;
`

const pictureContainer = css`
  height: 60px;
  width: 60px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const picture = css`
  height: 60px;
  width: 60px;
  background: white;
  border-radius: 160px;
  margin: 8px;
`

export { container }
export { name }
export { pictureContainer }
export { picture }
