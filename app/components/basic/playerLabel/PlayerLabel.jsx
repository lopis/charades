import React from 'react'
import s from 'styled-components'

import {container, name, badge, picture} from './styles'

const PlayerLabel = ({player, value, ...props}) => {
  const Container = s.div`${container}`
  const Name = s.div`${name}`
  const Badge = s.div`${badge}`
  const Picture = s.div`${picture}`

  return (
    <Container {...props}>
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
