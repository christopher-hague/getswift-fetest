import React from 'react'
import MenuContainer from '../containers/MenuContainer'
import MapContainer from '../containers/MapContainer'

const Home = ({drivers, jobs, handleAddJobClick}) => {
  return (
    <div className="ui grid">
      <div className="four wide column">
        <MenuContainer drivers={drivers} jobs={jobs} handleAddJobClick={handleAddJobClick}/>
      </div>

      <div className="twelve wide column">
        <MapContainer />
      </div>
    </div>
  )
}

export default Home
