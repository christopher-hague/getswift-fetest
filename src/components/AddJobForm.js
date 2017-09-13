import React from 'react'

// we need to find a way to render the form when the +ADD navbar element is clicked.
// when it is clicked, it needs to add the respective form inputs to the driver/job const
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
    this.props.addJobToJobs(this.state.location, this.state.customer)
    this.props.handleAddJobClick()
  }

  render() {
    console.log(this.state)
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
        <button className="ui button" type="submit" onClick={this.handleSubmitJob.bind(this)}>Add Job</button>
      </div>
    )
  }
}

export default AddJobForm
