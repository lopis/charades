import React, { PureComponent } from 'react'

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
        <button
          key={entry.key}
          onPress={entry.onClick}>
            <span>{entry.label}</span>
        </button>
      ))
    }

    render () {
        const {menuEntries} = this.props

        return (
            <div>
                <span>Charades</span>
                {this.makeMenu(menuEntries)}
            </div>
        )
    }
}
