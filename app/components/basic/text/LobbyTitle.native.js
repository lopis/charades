import React from 'react'
import { Text } from 'react-native'

const style = {
  fontWeight: "bold",
  fontSize: 35,
  margin: 10
}

export const LobbyTitle = ({children, ...props}) => {
  return <Text style={style} {...props}>{children}</Text>
}
