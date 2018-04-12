import React from 'react';
import { connect } from 'react-redux'
import { play, store, account } from '../../actions/menu'

import Menu from '../../layout/menu/Menu'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  menuEntries: [
    {
      key: 'play',
      label: 'Play',
      onClick: () => {
        dispatch(play)
      }
    },
    {
      key: 'store',
      label: 'Store',
      onClick: () => {
        dispatch(store)
      }
    },
    {
      key: 'account',
      label: 'Account',
      onClick: () => {
        dispatch(account)
      }
    },
  ]
})

const MainMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)

export default MainMenu
