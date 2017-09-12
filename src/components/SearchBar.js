import React from 'react'

class SearchBar extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input className="prompt" type="text" placeholder="Search..." />
          <i className="search icon"></i>
        </div>
      </div>
    )
  }
}

export default SearchBar
