import React from 'react'
import Driver from './Driver'

class Drivers extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      displayDrivers: false
    }
  }

  handleDisplayClick() {
    this.setState({ displayDrivers: !this.state.displayDrivers })
  }

  render() {
    const drivers = this.props.drivers.map(driver =>
      <Driver driver={driver} key={driver.id}/>
    )

    if(this.state.displayDrivers) {
      return (
        <div className="drivers-header">
          <h3>All Drivers ({this.props.drivers.length})</h3><br/>
          <button className="ui primary button" onClick={this.handleDisplayClick.bind(this)}>Hide Drivers</button>
          {drivers}
        </div>
      )
    } else {
      return (
        <div className="drivers-header">
          <h3>All Drivers ({this.props.drivers.length})</h3><br/>
          <button className="ui primary button" onClick={this.handleDisplayClick.bind(this)}>Display Drivers</button>
        </div>
      )
    }
  }
}

export default Drivers
