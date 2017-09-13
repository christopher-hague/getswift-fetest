import React from 'react'

const Job = ({job, findDriver}) => {
  return (
    <div className="ui segment" key={job.jobNum}>
      <p><b>Ride Number</b>: {job.jobNum}</p>
      <p><b>Location</b>: {job.location}</p>
      <p><b>Driver</b>: {findDriver(job).name}</p>
      <p><b>Passenger</b>: {job.customer}</p>
      <p><b>Due In</b>: {(findDriver(job).jobs.indexOf(job)) * 15} mins</p>
      {job === findDriver(job).jobs[0] ? <p><b>Ride Status</b>: Currently en route to pickup location</p> : <p><b>Ride Status</b>: In Transit</p>}
      <p></p>
    </div>
  )
}

export default Job
