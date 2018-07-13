import React from 'react'
import { View, Text } from 'react-native'

export const Box = ({children, ...props}) => {
  if (typeof children === 'string') {
    return <View><Text {...props}>{children}</Text></View>
  } else {
    return <View {...props}>{children}</View>
  }
}
