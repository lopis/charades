import React from 'react'
import { View } from 'react-native'

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

const GridLayout = ({style, columns, rows, ...props}) => {
  return <View {...props}/>
}

export { GridLayout }
