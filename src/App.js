import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import MapContainer from './containers/MapContainer'
import MenuContainer from './containers/MenuContainer'

const allDrivers = [
  {id: 1, name: "Leonardo", jobs: [], imageURL: "https://i0.wp.com/www.teenagemutantninjaturtles.com/wp-content/uploads/2013/01/character-leonardo1.png"},
  {id: 2, name: "Michelangelo", jobs: [], imageURL: "https://i2.wp.com/www.teenagemutantninjaturtles.com/wp-content/uploads/2012/04/Michelangelo-TMNT-2007-Movie-e1361299888830.jpg"},
  {id: 3, name: "Donatello", jobs: [], imageURL: "https://i0.wp.com/teenagemutantninjaturtles.com/wp-content/uploads/2012/10/Donatello.jpg"},
  {id: 4, name: "Rafael", jobs: [], imageURL: "http://teenagemutantninjaturtles.com/wp-content/uploads/2012/04/Raphael-2012-Teenage-Mutant-Ninja-Turtles.png"}
]

const allJobs = [
  { driverId: 1, jobNum: 2343, location: "Times Square", customer: "Austin Powers" },
  { driverId: 3, jobNum: 1343, location: "Katz's Delicatessen", customer: "Derrick Zoolander" },
  { driverId: 2, jobNum: 243, location: "Grand Central", customer: "Thomas the Tank Engine" },
  { driverId: 3, jobNum: 2103, location: "LaGuardia", customer: "Steven Spielberg"},
  { driverId: 3, jobNum: 953, location: "Brooklyn Bridge", customer: "Ken Burns" },
  { driverId: 1, jobNum: 745, location: "Empire State Building", customer: "King Kong" },
  { driverId: 3, jobNum: 901, location: "Xi'An's Famous Noodles", customer: "Bobby Flay" }
]

class App extends Component {
  constructor() {
    super()
    this.state = {
      drivers: allDrivers,
      jobs: allJobs
    }
  }

  render() {
    return (
      <div>
        <NavBar />

        <MenuContainer drivers={this.state.drivers} jobs={this.state.jobs}/>

        <MapContainer />
      </div>
    );
  }
}

export default App;
