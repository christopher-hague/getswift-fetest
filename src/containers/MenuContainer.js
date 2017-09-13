import React from 'react'
import SearchBar from '../components/SearchBar'
import Drivers from '../components/Drivers'
import Jobs from '../components/Jobs'

class MenuContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      drivers: this.props.drivers,
      jobs: this.props.jobs
    }
  }

  handleAddJobClick = (e) => this.setState({displayForm: !this.state.displayForm})

  addJobsToDrivers() {
    this.state.drivers.forEach(driver =>
      driver.jobs = this.state.jobs.filter(job => job.driverId === driver.id)
    )
  }

  render() {
    this.addJobsToDrivers()
    return (
      <div>

            <div className="ui segment">
              <SearchBar />
            </div>

            <div className="ui segment">
              <div className="drivers-header">
                <button className="ui primary button" onClick={this.props.handleAddJobClick}>Add Job</button>
              </div>
            </div>

            <div className="ui segment">
              <Drivers drivers={this.state.drivers}/>
            </div>

            <div className="ui segment">
              <Jobs jobs={this.state.jobs} drivers={this.state.drivers} />
            </div>

      </div>
    )
  }
}

export default MenuContainer
