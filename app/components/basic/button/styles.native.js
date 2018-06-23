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
`

const btnRound = css`
  color: white;
  font-size: ${({small}) => small ? 16 : 20};
  height: ${({small}) => small ? '45px' : '75px'};
  width: ${({small}) => small ? '45px' : '75px'};
  border-radius: 10vw;
  margin: 0.5vw;
`

export { btn }
export { btnRound }
