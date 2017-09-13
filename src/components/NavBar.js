import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import AddJobForm from './AddJobForm'

class NavBar extends React.Component {
  constructor() {
    super()

    this.state = {
      
    }
  }

  handleAddClick = (e, { name }) => console.log("Clicked +ADD, my boy!")
  handleItemClick = (e, { name }) => console.log("Clicked, my boy!")

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item
          name='+ADD'

          onClick={this.handleAddClick}
        >
          +ADD
        </Menu.Item>

        <Menu.Item
          name='MAPS'

          onClick={this.handleItemClick}
        >
          MAPS
        </Menu.Item>

        <Menu.Item
          name='REPORTS'

          onClick={this.handleItemClick}
        >
          REPORTS
        </Menu.Item>
      </Menu>
    )
  }
}

export default NavBar
