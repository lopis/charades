import React, { PureComponent } from 'react'
import { View } from 'react-native'

const styles = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
}

const VerticalLayout = ({style, ...props}) => {
  return <View style={Object.assign({}, style, styles)} {...props} />
}

export { VerticalLayout }
