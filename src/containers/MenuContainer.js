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

  addJobsToDrivers() {
    this.state.drivers.forEach(driver =>
      driver.jobs = this.state.jobs.filter(job => job.driverId === driver.id)
    )
  }

  render() {
    this.addJobsToDrivers()
    return (
      <div>
        <div className="ui grid">
          <div className="four wide column">

            <div className="ui segment">
              <SearchBar />
            </div>

            <div className="ui segment">
              <div className="drivers-header">
                <h3>Menu</h3>
              </div>
            </div>

            <div className="ui segment">
              <Drivers drivers={this.state.drivers}/>
            </div>

            <div className="ui segment">
              <Jobs jobs={this.state.jobs} drivers={this.state.drivers} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MenuContainer

// find a way to add appropritate driver / job info via menu container rather thant the components themselves
