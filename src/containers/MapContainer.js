import React from 'react'

const MapContainer = () => {

  const mapUrl = "http://99percentinvisible.org/app/uploads/2013/11/downtown-no-moses.jpg"
  return (
    <div className="ui grid">
      <div className="twelve wide column">
        <img className="ui centered huge image" alt="Manhattan, NYC" src={mapUrl} />
      </div>
    </div>
  )
}

export default MapContainer
