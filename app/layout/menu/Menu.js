import React, { PureComponent } from 'react'
import MenuLayout from './MenuLayout'

class Menu extends PureComponent {
    render() {
        return <MenuLayout {...this.props}/>
    }
}

export default Menu
