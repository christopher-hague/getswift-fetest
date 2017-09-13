import React from 'react'
import { Menu } from 'semantic-ui-react'

class NavBar extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  handleAddClick = (e, { name }) => console.log("Clicked +ADD!")
  handleMapsClick = (e, { name }) => console.log("Clicked MAPS!")
  handleReportsClick = (e, { name }) => console.log("Clicked REPORTS!")

  render() {
    return (
      <div>
        <Menu inverted>
          <Menu.Item
            name='+ADD'

            onClick={this.handleAddClick}
          >
            +ADD
          </Menu.Item>

          <Menu.Item
            name='MAPS'

            onClick={this.handleMapsClick}
          >
            MAPS
          </Menu.Item>

          <Menu.Item
            name='REPORTS'

            onClick={this.handleReportsClick}
          >
            REPORTS
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default NavBar
