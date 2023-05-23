import React from 'react'
import JobDetails from '../components/JobDetails'
const Jobs = () => {
  const jobData = [
    {author: "James Clear", 
    position: "Landscaper",
    location: "Lagos",
    description: "Lorem ipsum dgdhbdjbdn d hbdevgavs wsbasw bduahsbdbwqhsahn fjsd ybcewds  dsjbfhbdn d dne ubedn fn dhb  dsmnbhsbdb ss hbcazmv jnx,  dzlybv s mcsjzhbc "
  }
  ]
  return (
    <div className='h-screen px-4 max-w-[750px] '>
      <JobDetails props={jobData} />
    </div>
  )
}

export default Jobs
