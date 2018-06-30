import React from 'react'
import { View, Text } from 'react-native'

function getGridStyles (columns = [], rows = []) {
  return {
    position: "relative",
    height: '100%',
    width: '100%',
  }
}

const validPlaces = ["flex-start","flex-end","center","stretch","baseline"]
function getPlace (place = []) {
  return place.map(p => {
    if (p === 'start') return 'flex-start'
    if (p === 'end') return 'flex-end'
    if (validPlaces.includes(p)) return p
    else return 'center'
  })
}

// Converts column/row widths to absolute positions
function widthsToPositions(widths) {
  let pivot = 0
  const positions = widths.map(w => {
    pivot += w
    return pivot
  })
  return [0].concat(positions)
}

const GridLayout = ({columns = [], rows = [], children = [], ...props}) => {
  const _columns = widthsToPositions(columns)
  const _rows = widthsToPositions(rows)

  const _children = React.Children.map(children, (child, i) => {
    const {area, children, place = ''} = child.props
    const _area = area.map(c => c-1)
    const _place = getPlace(place.split(' '))

    const style = {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'row',
      top: `${_rows[_area[0]] * 10}%`,
      left: `${_columns[_area[1]] * 10}%`,
      height: `${(_rows[_area[2]] - _rows[_area[0]]) * 10}%`,
      width: `${(_columns[_area[3]] - _columns[_area[1]]) * 10}%`,
      overflow: 'hidden',
      justifyContent: _place[0] || undefined,
      alignItems: _place[1] || _place[0] || undefined,

      // borderWidth: 1,
      // borderColor: 'red',
    }

    // Using the "area" prop we can decide on which location to
    // put this cell, taking the size of rows and columns into account.
    return <View style={style} key={i}>{children}</View>
  })

  return <View style={getGridStyles()}>
    {_children}
  </View>
}

export { GridLayout }
