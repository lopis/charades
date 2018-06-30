import { css } from 'styled-components'
import colors from '../../../constants/colors'

const container = css`
  padding: 8px;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 2px;
  border-radius: 3px;
  border: 2px solid ${colors.dark};
  align-items: center;
`

const name = css`
  color: ${colors.dark};
  font-size: 20px;
  flex-grow: 1;
`

const picture = css`
  height: 40px;
  width: 40px;
  border-radius: 24px;
  background: ${colors.dark};
  margin-right: 8px;
`

const badge = css`
  background: ${colors.darkest};
  color: white;
  border-radius: 40px;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
`

export { container }
export { name }
export { picture }
export { badge }
