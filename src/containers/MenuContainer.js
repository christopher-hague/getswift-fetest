import React from 'react'
import SearchBar from '../components/SearchBar'
import Drivers from '../components/Drivers'

class MenuContainer extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    return (
      <div>
        <div className="ui grid">
          <div className="four wide column">

            <div className="ui segment">
              <SearchBar />
            </div>
            <div className="ui raised segments">
              <Drivers />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MenuContainer
