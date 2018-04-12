import React from 'react'

import styles from './styles'

const Button = ({onClick, className, style, ...props}) => {
  return <button
    style={Object.assign({}, styles.button, styles[className], style)}
    onClick={onClick}
    {...props}/>
}

export { Button }
