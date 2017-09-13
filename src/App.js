import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Home from './containers/Home'
import AddJobForm from './components/AddJobForm'

const allDrivers = [
  {id: 1, name: "Leonardo", jobs: [], imageURL: "https://i0.wp.com/www.teenagemutantninjaturtles.com/wp-content/uploads/2013/01/character-leonardo1.png"},
  {id: 2, name: "Michelangelo", jobs: [], imageURL: "https://i2.wp.com/www.teenagemutantninjaturtles.com/wp-content/uploads/2012/04/Michelangelo-TMNT-2007-Movie-e1361299888830.jpg"},
  {id: 3, name: "Donatello", jobs: [], imageURL: "https://i0.wp.com/teenagemutantninjaturtles.com/wp-content/uploads/2012/10/Donatello.jpg"},
  {id: 4, name: "Rafael", jobs: [], imageURL: "http://teenagemutantninjaturtles.com/wp-content/uploads/2012/04/Raphael-2012-Teenage-Mutant-Ninja-Turtles.png"}
]

const allJobs = [
  { driverId: 1, jobNum: 1, location: "Times Square", customer: "Austin Powers" },
  { driverId: 3, jobNum: 2, location: "Katz's Delicatessen", customer: "Derrick Zoolander" },
  { driverId: 2, jobNum: 3, location: "Grand Central", customer: "Thomas the Tank Engine" },
  { driverId: 3, jobNum: 4, location: "LaGuardia", customer: "Steven Spielberg"},
  { driverId: 3, jobNum: 5, location: "Brooklyn Bridge", customer: "Ken Burns" },
  { driverId: 1, jobNum: 6, location: "Empire State Building", customer: "King Kong" },
  { driverId: 3, jobNum: 7, location: "Xi'An Famous Noodles", customer: "Bobby Flay" }
]

class App extends Component {
  constructor() {
    super()
    this.state = {
      drivers: allDrivers,
      jobs: allJobs,
      renderJobForm: false
    }
  }

  handleAddJobClick = (e) => this.setState({ renderJobForm: !this.state.renderJobForm })
  addJobToJobs(job) {
    this.setState({
      jobs: [...this.state.jobs, job]
    })
  }

  makeJob(location, customer) {
    return {
      driverId: this.state.drivers.reduce((a,b) => a.jobs.length <= b.jobs.length ? a : b).id,
      jobNum: this.state.jobs.length + 1,
      location: location, customer: customer
    }
  }

  render() {
    if(this.state.renderJobForm) {
      return (
        <div>
          <NavBar />
          <AddJobForm
            makeJob={this.makeJob.bind(this)}
            addJobToJobs={this.addJobToJobs.bind(this)}
            handleAddJobClick={this.handleAddJobClick.bind(this)}
          />
        </div>
      )
    } else {
      return (
        <div>
          <NavBar />
          <Home
            drivers={this.state.drivers}
            jobs={this.state.jobs}
            handleAddJobClick={this.handleAddJobClick.bind()}
          />
        </div>
      )
    }
  }
}

export default App;
