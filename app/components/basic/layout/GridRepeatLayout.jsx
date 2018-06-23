import React from 'react'

function getCellStyles (style = {}, template = [1, 1]) {
  return {
    display: 'grid',
    maxHeight: '100%',
    gridTemplate: `repeat(${template[0]}, 1fr) / repeat(${template[1]}, 1fr)`,
    ...style
  }
}

const GridRepeatLayout = ({style, template, children, ...props}) => {
  return (
    <div style={getCellStyles(style, template)} {...props} />
  )
}

export { GridRepeatLayout }
