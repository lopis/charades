import React from 'react'

function toFrUnits (values = []) {
  return values.map(v => `${v}fr`).join(' ')
}

function getGridStyles (columns = [], rows = []) {
  return {
    display: 'grid',
    gridTemplateColumns: toFrUnits(columns),
    gridTemplateRows: toFrUnits(rows),
    height: '100%',
  }
}

const GridLayout = ({style, children, columns, rows, ...props}) => {
  return <div style={Object.assign({}, style, getGridStyles(columns, rows))} {...props}>{children}</div>
}

export { GridLayout }
