import React from 'react'
import { TouchableNativeFeedback } from 'react-native'
import s from 'styled-components'

import {container, name, badge, picture} from './styles'

const PlayerLabel = ({player, onClick, value, ...props}) => {
  const Container = s.View`${container}`
  const Name = s.Text`${name}`
  const Badge = s.Text`${badge}`
  const Picture = s.View`${picture}`

  return (
    <TouchableNativeFeedback onTouch={onClick}>
      <Container {...props}>
        <Picture />
        <Name>
          {player.name}
        </Name>
        {value !== undefined && (
          <Badge>{value}</Badge>
        )}
      </Container>
    </TouchableNativeFeedback>
  )
}

export { PlayerLabel }
