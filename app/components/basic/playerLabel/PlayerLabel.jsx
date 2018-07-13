import React from 'react'
import { TouchableNativeFeedback } from 'react-native'
import s from 'styled-components'

import {container, name, badge, picture} from './styles'

const PlayerLabel = ({player, value, ...props}) => {
  const Container = s.div`${container}`
  const Name = s.div`${name}`
  const Badge = s.div`${badge}`
  const Picture = s.div`${picture}`

  return (
    <TouchableNativeFeedback>
      <Container {...props}>
        <Picture />
        <Name>
          {player.name}
        </Name>
        {value !== undefined && (
          <Badge>{value}</Badge>
        )}
      </Container>
ft3    </TouchableNativeFeedback>
  )
}

export { PlayerLabel }
