import React from 'react'

const style = {
  fontSize: '5vh',
  background: 'linear-gradient(4deg, rgb(250, 85, 63), rgb(241, 215, 0)) repeat scroll 0% 0%',
  padding: '3vh',
  gridArea: '2 / 4 / 2 / 3',
  alignSelf: 'self-start',
  justifySelf: 'self-end',
  margin: '3vh',
  borderRadius: '5vh',
}

const Bonus = ({children}) => {
  return <div style={style}>
    ✨ +{children}
  </div>
}

export { Bonus }
