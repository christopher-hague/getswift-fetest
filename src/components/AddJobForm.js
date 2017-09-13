import React from 'react'

// we need to find a way to render the form when the +ADD navbar element is clicked.
// when it is clicked, it needs to add the respective form inputs to the driver/job const
class AddJobForm extends React.Component {
  constructor() {
    super()

    this.state = {
      location: '',
      customer: '',
      displayForm: false
    }
  }

  render() {
    if(this.state.displayForm) {
      <div className="ui form">
        <div className="field">
          <label>Pick-Up Location</label>
          <input type="text" name="pick-up location" placeholder="Where would you like to be picked up at?" />
        </div>
        <div className="field">
          <label>Name</label>
          <input type="text" name="pick-up location" placeholder="Please enter the name associated with your account" />
        </div>
      </div>
    } else {
      return null
    }
  }
}

export default AddJobForm
