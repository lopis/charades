import React from 'react'
import { Box } from '../box/Box'

const style = {
  fontSize: '5vh',
  background: 'linear-gradient(to right top, #38438b, #944b94, #d75a88, #ff7e71, #ffb25f, #ffeb68)',
  padding: '3vh',
  gridArea: '2 / 4 / 2 / 3',
  alignSelf: 'self-start',
  justifySelf: 'self-end',
  margin: '3vh',
  borderRadius: '5vh',
}

const Bonus = ({children}) => {
  return <Box style={style}>
    ✨ +{children}
  </Box>
}

export { Bonus }
