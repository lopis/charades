import React, { PureComponent } from 'react'

const styles = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
}

const VerticalLayout = ({style, children, ...props}) => {
  return <div style={Object.assign({}, style, styles)} {...props}>{children}</div>
}

export { VerticalLayout }
