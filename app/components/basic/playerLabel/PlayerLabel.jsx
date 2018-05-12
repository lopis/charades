import React from 'react'
import s from 'styled-components'

import {container, name, badge, picture} from './styles'

const PlayerLabel = ({player, value}) => {
  const Container = s.div`${container}`
  const Name = s.div`${name}`
  const Badge = s.div`${badge}`
  const Picture = s.div`${picture}`

  return (
    <Container>
      <Picture />
      <Name>
        {player.name}
      </Name>
      {value && (
        <Badge>{value}</Badge>
      )}
    </Container>
  )
}

export { PlayerLabel }
