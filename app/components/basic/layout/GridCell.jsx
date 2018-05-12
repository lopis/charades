import React from 'react'

function getCellStyles (area = [], place = 'center') {
  return {
    gridArea: area.join(' / '),
    placeSelf: place,
    position: 'relative',
    margin: '1vw',
  }
}

const GridCell = ({style, area, place, ...props}) => {
  return <div style={Object.assign({}, style, getCellStyles(area, place))}
    {...props} />
}

export { GridCell }
