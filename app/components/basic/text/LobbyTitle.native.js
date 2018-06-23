import React from 'react'
import { Text } from 'react-native'

const style = {
  fontWeight: "bold",
  fontSize: 20,
}

export const LobbyTitle = (props) => {
  return <Text style={style} {...props}></Text>
}
