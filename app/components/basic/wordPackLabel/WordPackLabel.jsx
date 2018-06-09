import React from 'react'
import s from 'styled-components'

import {container, name, badge, pictureContainer, picture} from './styles'

const WordPackLabel = ({title, description, onClick}) => {
  const Container = s.div`${container}`
  const Name = s.div`${name}`
  const PictureCont = s.div`${pictureContainer}`
  const Picture = s.div`${picture}`

  return (
    <Container onClick={onClick}>
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
