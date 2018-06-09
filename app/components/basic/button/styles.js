import { css } from 'styled-components'
import colors from '../../../constants/colors'

const getBackground = props => {
  return props.disabled ? `lightgray`
    : props.blue ? `linear-gradient(40deg, ${colors.dark}, ${colors.darker})`
    : `linear-gradient(40deg, ${colors.primary}, ${colors.middle})`
}

const btn = css`
  padding: 2vh;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: inherit;
  border: none;
  border-radius: 10vh;
  margin: 0.5vh;
  background: ${props => getBackground(props)};
`


const btnRound = css`
  color: white;
  font-size: ${({small}) => small ? '5vw' : '8vw'};
  height: ${({small}) => small ? '10vw' : '14vw'};
  width: ${({small}) => small ? '10vw' : '14vw'};
  border-radius: 10vw;
  margin: 0.5vw;
`

export { btn }
export { btnRound }
