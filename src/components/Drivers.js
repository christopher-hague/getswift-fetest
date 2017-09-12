import React from 'react'

//name, num of jobs, available
const allDrivers = [
  {
    name: "Leonardo",
    jobs: [
      {jobNumber: 2343, location: "Times Square", customer: "Austin Powers", pickUpDue: "10 min"},
      {jobNumber: 1243, location: "Katz Deli", customer: "Derrick Zoolander", pickUpDue: "20 min"}
    ],
    availableIn: 21,
    imageURL: "https://i0.wp.com/www.teenagemutantninjaturtles.com/wp-content/uploads/2013/01/character-leonardo1.png" //364X569
  },
  {
    name: "Michelangelo",
    jobs: [
      {jobNumber: 243, location: "Grand Central", customer: "Thomas the Tank Engine", pickUpDue: "15 min"}
    ],
    availableIn: 14,
    imageURL: "https://i2.wp.com/www.teenagemutantninjaturtles.com/wp-content/uploads/2012/04/Michelangelo-TMNT-2007-Movie-e1361299888830.jpg" // 500x539
  },
  {
    name: "Rafael",
    jobs: [
      {jobNumber: 2103, location: "La Guardia", customer: "Lionel Messi", pickUpDue: 2},
      {jobNumber: 953, location: "Brooklyn Bridge", customer: "Ken Burns", pickUpDue: 12},
      {jobNumber: 745, location: "Empire State Building", customer: "King Kong", pickUpDue: 30},
      {jobNumber: 901, location: "Xi'An's Famous Noodles", customer: "Bobby Flay", pickUpDue: 45}
    ],
    availableIn: 48,
    imageURL: "http://teenagemutantninjaturtles.com/wp-content/uploads/2012/04/Raphael-2012-Teenage-Mutant-Ninja-Turtles.png" //396x499
  },
  {
    name: "Donatello",
    jobs: [],
    availableIn: 0,
    imageURL: "https://i0.wp.com/www.teenagemutantninjaturtles.com/wp-content/uploads/2012/10/Donatello.jpg" //620x368
  }
]


const drivers = allDrivers.map(driver =>
  <div className="ui segment" key={driver.name}>
    <div className="ui small image">
      <h3>{driver.name}</h3>
      <img src={driver.imageURL}></img>
      <div className="ui segment">
        <h5>{driver.jobs.length} jobs</h5>
      </div>
      <div className="ui segment">
        {driver.availableIn ? <h5>Available in {driver.availableIn} minutes</h5> : <h5>Available now</h5>}
      </div>
    </div>
  </div>
)

class Drivers extends React.Component {
  constructor() {
    super()

    this.state = {
      displayDrivers: false
    }
  }

  handleDisplayClick(event) {
    event.preventDefault()
    this.setState({ displayDrivers: !this.state.displayDrivers })
  }

  render() {
    if(this.state.displayDrivers === true) {
      return (
        <div className="drivers-header">
          <p>All Drivers ({allDrivers.length})</p><br/>
          <button className="ui primary button" onClick={this.handleDisplayClick.bind(this)}>Hide Drivers</button>
          {drivers}
        </div>
      )
    } else {
      return (
        <div className="drivers-header">
          <p>All Drivers ({allDrivers.length})</p><br/>
          <button className="ui primary button" onClick={this.handleDisplayClick.bind(this)}>Display Drivers</button>
        </div>
      )
    }
  }
}

export default Drivers
