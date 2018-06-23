import React from 'react'
import s from 'styled-components'

import {container, name, badge, pictureContainer, picture} from './styles'

const WordPackLabel = ({title, description, onClick}) => {
  const Container = s.View`${container}`
  const Name = s.View`${name}`
  const PictureCont = s.View`${pictureContainer}`
  const Picture = s.View`${picture}`

  return (
    <Container onTouch={onClick}>
      <PictureCont>
        <Picture />
      </PictureCont>
      <Name>
        {title}
      </Name>
      {description}
    </Container>
  )
}

export { WordPackLabel }
