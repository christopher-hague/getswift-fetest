import React from 'react'

class AddJobForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      location: '',
      customer: ''
    }
  }

  handleLocationChange = (e) => this.setState({ location: e.target.value })
  handleCustomerChange = (e) => this.setState({ customer: e.target.value })
  handleSubmitJob() {
    if(!this.state.location || !this.state.customer) {
      return alert("please enter a location and a username")
    } else {
      this.props.addJobToJobs(this.props.makeJob(this.state.location, this.state.customer))
      this.props.handleAddJobClick()
    }
  }

  render() {
    return (
      <div className="ui form">
        <div className="field">
          <label>Pick-Up Location</label>
          <input type="text" name="pick-up location" onChange={this.handleLocationChange.bind(this)} placeholder="Where would you like to be picked up?" />
        </div>
        <div className="field">
          <label>Name</label>
          <input type="text" name="pick-up location" onChange={this.handleCustomerChange.bind(this)} placeholder="Please enter the name associated with your account" />
        </div>
        <button className="ui primary button" type="submit" onClick={this.handleSubmitJob.bind(this)}>Add Job</button>
        <button className="ui red button" color="red" onClick={this.props.handleAddJobClick}>Cancel</button>
      </div>
    )
  }
}

export default AddJobForm
