import React from 'react'
import { View, ScrollView } from 'react-native'

function getStyles (style = {}, template = [1, 1]) {
  return {
    display: 'flex',
    position: "relative",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: '100%',
    width: '100%',
    padding: 5,
    ...style
  }
}

const GridRepeatLayout = ({style, template, ...props}) => {
  return (
    <ScrollView>
      <View style={getStyles(style, template)} {...props}/>
    </ScrollView>
  )
}

export { GridRepeatLayout }
