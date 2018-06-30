import { css } from 'styled-components'
import colors from '../../../constants/colors'

const getBackground = props => {
  return props.disabled ? `lightgray`
  : props.blue ? colors.dark
  : colors.primary
}

const btn = css`
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 10px;
  margin: 1px;
  background: ${props => getBackground(props)};
  padding: 10px;
`

const btnText = css`
  color: white
  font-size: ${({small}) => small ? 25 : 55};
`

const btnRound = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => getBackground(props)};
  height: ${({small}) => small ? '45px' : '75px'};
  width: ${({small}) => small ? '45px' : '75px'};
  border-radius: 75px;
  margin: 5px;
`

export { btn }
export { btnText }
export { btnRound }
