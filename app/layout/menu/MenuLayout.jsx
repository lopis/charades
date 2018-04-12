import React, { PureComponent } from 'react'
import { Button } from '../../components'
import { VerticalLayout } from '../../layout'

export default class Render extends PureComponent {
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
          style={{marginBottom: 10}}
          onClick={entry.onClick}>
            <span>{entry.label}</span>
        </Button>
      ))
    }

    render () {
        const {menuEntries} = this.props

        return (
            <VerticalLayout>
                <span>Charades</span>
                {this.makeMenu(menuEntries)}
            </VerticalLayout>
        )
    }
}
