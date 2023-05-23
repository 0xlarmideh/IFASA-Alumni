import React, { useState } from "react";

const JobDetails = ({props}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-primary text-white">
      {props.map((item, index) => {
        return (
          <div key={index}>
            <div
            
              className="flex justify-between"
              onClick={()=>toggleAccordion(index)}
            >
              <div>Author: {item.author} </div>
              <div>Position: {item.position} </div>
              <div>Location: {item.location} </div>
            </div>
            {activeIndex === index ? (<div>
              {item.description}
            </div>) : null}
          </div>
        );
      })}
    </div>
  );
};

export default JobDetails