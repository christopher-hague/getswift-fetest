import React from 'react'

const Driver = ({driver}) => {
  return (
    <div className="ui segment" key={driver.name}>
      <div className="ui small image">
        <h3>{driver.name}</h3>
        <img src={driver.imageURL} alt={driver.name}></img>
        <div className="ui segment">
          <h5>{driver.jobs.length} jobs</h5>
        </div>
        <div className="ui segment">
          {driver.jobs.length > 0 ? <h5>Available in {driver.jobs.length * 15} minutes</h5> : <h5>Available now!</h5>}
        </div>
      </div>
    </div>
  )
}

export default Driver
