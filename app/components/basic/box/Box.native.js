import React from 'react'
import { View, Text } from 'react-native'

export const Box = ({children, ...props}) => {
  if (typeof chlidren === 'string') {
    return <View {...props}><Text>{children}</Text></View>
  } else {
    return <View {...props}>{children}</View>
  }
}
