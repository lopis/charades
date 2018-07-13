import React, {Component} from 'react'
import { View, ScrollView } from 'react-native'
import s from 'styled-components'

import { WordPackLabel } from '../../basic'

const Grid = s.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

export const WordPackList = ({wordPacks, selectWordPack}) => {

  return <ScrollView>
    <Grid>
      {wordPacks.map((pack, i) => (
        <WordPackLabel type="text"
          key={`${i}_${pack.name}`}
          title={pack.name}
          description={pack.description}
          icon={pack.icon}
          onClick={() => selectWordPack(pack)} />
      ))}
    </Grid>
  </ScrollView>
}
