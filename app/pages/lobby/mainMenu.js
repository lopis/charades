import React from 'react';
import Menu from '../../layout/menu/Menu'

const menuEntries = [
  {
    key: 'play',
    label: 'Play',
    onSubmit: () => {}
  },
  {
    key: 'store',
    label: 'Store',
    onSubmit: () => {}
  },
  {
    key: 'account',
    label: 'Account',
    onSubmit: () => {}
  },
]

const mainMenu = (props) => (
  <Menu menuEntries={menuEntries} />
)

export default mainMenu
