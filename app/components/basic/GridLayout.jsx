import React, { PureComponent } from 'react'

function getGridStyles (columns = [], rows = []) {
  return {
    display: 'grid',
    gridTemplateColumns: columns.join(' '),
    gridTemplateRows: rows.join(' '),
    height: '100%',
  }
}

function getCellStyles (area) {
  return {
    gridArea: area.join(' / '),
    placeSelf: 'center',
    position: 'relative',
  }
}

const GridLayout = ({style, children, columns, rows, ...props}) => {
  return <div style={Object.assign({}, style, getGridStyles(columns, rows))} {...props}>{children}</div>
}

const GridCell = ({style, children, area = [], ...props}) => {
  return <div style={Object.assign({}, style, getCellStyles(area))} {...props}>{children}</div>
}

export { GridLayout }
export { GridCell }
