import { css } from 'styled-components'
import colors from '../../../constants/colors'

const styles = css`
  border-radius: 0;
  border: 2px solid ${colors.highlight};
  width: 100%;
  box-shadow: ${({error}) => error ? `0 0 1vw ${colors.primary}` : 'none'}
`
export { styles }
