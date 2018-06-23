import React, { PureComponent } from 'react'
import { Button, VerticalLayout, Logo } from '../../components'

export default class MenuLayout extends PureComponent {
    constructor(){
        super()

        this.state = {
            inputValue: ''
        }
    }

    onChange = (value) => {
        const inputValue = value
        this.setState(() => ({ inputValue }))
    }

    makeMenu = (entries = []) => {
      return entries.map(entry => (
        <Button
          key={entry.key}
          onClick={entry.onClick}>
            <span>{entry.label}</span>
        </Button>
      ))
    }

    render () {
        const {menuEntries} = this.props

        return (
            <VerticalLayout>
                <div>
                  <Logo />
                </div>
                {this.makeMenu(menuEntries)}
            </VerticalLayout>
        )
    }
}
