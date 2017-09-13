import React from 'react'
import MenuContainer from '../containers/MenuContainer'
import MapContainer from '../containers/MapContainer'
import AddJobForm from '../components/AddJobForm'

const Home = ({drivers, jobs, handleAddJobClick}) => {
  return (
    <div>
      <MenuContainer drivers={drivers} jobs={jobs} handleAddJobClick={handleAddJobClick}/>
      <MapContainer />
    </div>
  )
}

export default Home
