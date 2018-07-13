import React from 'react'
import { TouchableNativeFeedback, Text } from 'react-native'
import s from 'styled-components'

import {container, name, badge, pictureContainer, picture} from './styles'

const WordPackLabel = ({title, description, icon, onClick}) => {
  const Container = s.View`${container}`
  const Name = s.Text`${name}`
  const PictureCont = s.View`${pictureContainer}`
  const Picture = s.View`${picture}`

  return (
    <TouchableNativeFeedback onPress={onClick}>
      <Container>
        <PictureCont>
          <Picture>
            <Text style={{fontSize: 40}}>{icon}</Text>
          </Picture>
        </PictureCont>
        <Name>
          {title}
        </Name>
      </Container>
    </TouchableNativeFeedback>
  )
}

export { WordPackLabel }
