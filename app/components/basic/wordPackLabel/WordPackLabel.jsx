import React from 'react'
import s from 'styled-components'

import {container, name, badge, picture} from './styles'

const WordPackLabel = ({title, description, onClick}) => {
  const Container = s.div`${container}`
  const Name = s.div`${name}`
  const Picture = s.div`${picture}`

  return (
    <Container onClick={onClick}>
      <Picture />
      <Name>
        {title}
      </Name>
      {description}
    </Container>
  )
}

export { WordPackLabel }
