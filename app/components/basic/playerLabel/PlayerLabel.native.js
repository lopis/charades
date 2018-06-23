import React from 'react'
import s from 'styled-components'

import {container, name, badge, picture} from './styles'

const PlayerLabel = ({player, onClick, value, ...props}) => {
  const Container = s.View`${container}`
  const Name = s.View`${name}`
  const Badge = s.View`${badge}`
  const Picture = s.View`${picture}`

  return (
    <Container onTouch={onClick} {...props}>
      <Picture />
      <Name>
        {player.name}
      </Name>
      {value !== undefined && (
        <Badge>{value}</Badge>
      )}
    </Container>
  )
}

export { PlayerLabel }
