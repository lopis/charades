import React from 'react'
import { View } from 'react-native'

function getCellStyles (area = [], place = 'center') {
  return {
    gridArea: area.join(' / '),
    placeSelf: place,
    position: 'relative',
    margin: '1vw',
  }
}

const GridCell = ({style, area, place, ...props}) => {
  return <View {...props}/>
}

export { GridCell }
