import React from 'react'
import Job from './Job'

class Jobs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      displayJobs: false
    }
  }

  handleDisplayClick() {
    this.setState({ displayJobs: !this.state.displayJobs })
  }

  findDriver(job) {
    return this.props.drivers.find(driver => driver.id === job.driverId)
  }

  render() {
    const jobs = this.props.jobs.sort((a,b) => a.jobNum - b.jobNum).map(job =>
      <Job job={job} key={job.jobNum} findDriver={this.findDriver.bind(this)}/>
    )

    if(this.state.displayJobs) {
      return (
        <div className="jobs-header">
          <h3>All Jobs ({this.props.jobs.length})</h3><br/>
          <button className="ui primary button" onClick={this.handleDisplayClick.bind(this)}>Hide Jobs</button>
          {jobs}
        </div>
      )
    } else {
      return (
        <div className="drivers-header">
          <h3>All Jobs ({this.props.jobs.length})</h3><br/>
          <button className="ui primary button" onClick={this.handleDisplayClick.bind(this)}>Display Jobs</button>
        </div>
      )
    }
  }
}

export default Jobs
