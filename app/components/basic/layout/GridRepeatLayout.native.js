import React from 'react'
import { View } from 'react-native'

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
    <View {...props}/>
  )
}

export { GridRepeatLayout }
