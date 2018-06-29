import React from 'react'
import { TouchableNativeFeedback } from 'react-native'
import s from 'styled-components'

import {container, name, badge, pictureContainer, picture} from './styles'

const WordPackLabel = ({title, description, onClick}) => {
  const Container = s.View`${container}`
  const Name = s.Text`${name}`
  const PictureCont = s.View`${pictureContainer}`
  const Picture = s.View`${picture}`

  return (
    <TouchableNativeFeedback onPress={onClick}>
      <Container>
        <PictureCont>
          <Picture />
        </PictureCont>
        <Name>
          {title}
        </Name>
      </Container>
    </TouchableNativeFeedback>
  )
}

export { WordPackLabel }
