import React from 'react'
import css from 'styled-components'

const Text = css.Text`
  font-size: 64px
`
const View = css.View`
  background: #ffb25f;
  padding: 24px;
  margin: 34px;
  border-radius: 40px;
`

const Bonus = ({children = ''}) => {
  return <View>
    <Text>
      {`✨ ${children}`}
    </Text>
  </View>
}

export { Bonus }
