import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import MapContainer from './containers/MapContainer'
import MenuContainer from './containers/MenuContainer'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <MenuContainer />

        <MapContainer />
      </div>
    );
  }
}

export default App;
