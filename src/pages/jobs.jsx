import React, { useEffect } from 'react'
import JobDetails from '../components/JobDetails'
import Navbar from '../components/Navbar'
import apiClient from '../utils/api/axiosInstance';


const Jobs = () => {
  const jobData = [
    {
      author: "James Clear",
      position: "Landscaper",
      location: "Lagos",
      description:
        "Lorem ipsum dgdhbdjbdn d hbdevgavs wsbasw bduahsbdbwqhsahn fjsd ybcewds  dsjbfhbdn d dne ubedn fn dhb  dsmnbhsbdb ss hbcazmv jnx,  dzlybv s mcsjzhbc ",
    },
    {
      author: "John Doe",
      position: "Archy",
      location: "Lagos",
      description:
        "Lorem ipsum dgdhbdjbdn d hbdevgavs wsbasw bduahsbdbwqhsahn fjsd ybcewds  dsjbfhbdn d dne ubedn fn dhb  dsmnbhsbdb ss hbcazmv jnx,  dzlybv s mcsjzhbc ",
    },
  ];

  useEffect(() => {
    const response = async() => {
      await apiClient.get("/jobs/getAllJobs");
    // console.log(response);
    } 
    const apiCall = response();
    console.log(apiCall)
    
  }, []);
  return (
    <div className="">
      <Navbar />
      <div className="px-[4.8rem] max-md:px-[0.6rem] py-[3.6rem] ">
        <JobDetails props={jobData} />

      </div>
      <style jsx global>
        {`
          body {
             background: #02252e
          }
        `}
      </style>
    </div>
  );
}

export default Jobs
