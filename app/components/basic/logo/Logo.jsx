import React from 'react'
import colors from '../../../constants/colors'

const style = {
  textAlign: 'center',
  margin: '5vw 0',
  fontSize: '10vw',
  fontWeight: 'bold',
  background: `linear-gradient(15deg, ${colors.darkest} 0%, ${colors.middle} 50%, ${colors.superPrimary} 100%)`,
  backgroundClip: 'text',
  color: 'transparent',
  lineHeight: 1,
}

const Logo = (props) => {

  return (
    <div style={style}>
      CHARADES
    </div>
  )
}

export { Logo }
