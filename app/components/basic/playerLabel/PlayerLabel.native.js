import React from 'react'
import { TouchableNativeFeedback, Image } from 'react-native'
import s from 'styled-components'
import { getAvatar } from '../../../helpers/avatar'

import {container, name, nameBig, badge, picture} from './styles'

const renderPicture = (player, big) => {
  const Picture = s.View`${picture}`
  const size = big ? 90 : 40
  return (
    <Picture>
      <Image source={{uri: getAvatar(player.name, 200)}}
        style={{height: size, width: size}}
      />
    </Picture>
  )
}

const PlayerLabel = props => {
  const {
    player,
    onClick,
    value,
    big,
    reverse
  } = props

  const Container = s.View`${container}`
  const Name = s.Text`${name}`
  const Badge = s.Text`${badge}`
  return (
    <TouchableNativeFeedback onPress={onClick}>
      <Container {...props}>
        {!reverse && renderPicture(player, big)}
        <Name big={big} reverse={reverse}>
          {player.name}
        </Name>
        {value !== undefined && (
          <Badge>{value}</Badge>
        )}
        {reverse && renderPicture(player, big)}
      </Container>
    </TouchableNativeFeedback>
  )
}

export { PlayerLabel }
