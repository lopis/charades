import { css } from 'styled-components'
import colors from '../../../constants/colors'

const container = css`
  padding: 8px;
  display: flex;
  flex-direction: row;
  margin: ${({big}) => big ? '0px' : '10px 2px'};
  border-radius: 3px;
  border: solid ${colors.dark};
  border-width: ${({big}) => big ? '0px' : '2px'}
  align-items: center;
`

const name = css`
  color: ${({big}) => big ? colors.primary : colors.dark};
  font-weight: ${({big}) => big ? 'bold' : 'normal'};
  font-size: ${({big}) => big ? '50px' : '20px'};
  text-align: ${({reverse}) => reverse ? 'right' : 'left'}
  flex-grow: 1;
  margin: 0 10px;
`

const picture = css`
  border-radius: 100px;
  background: ${colors.dark};
  margin-right: 8px;
  overflow: hidden;
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
