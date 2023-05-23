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
          <div
            key={index}
            className={`bg-primary_light border-l-[6px] border-secondary p-4 rounded-[6px] mb-8 ${activeIndex===index ? "border-transparent" : ""}  `}
          >
            <div
              className="grid grid-cols-[1.6fr_1.4fr_1fr_1fr] gap-4 items-baseline"
              onClick={() => toggleAccordion(index)}
            >
              <div className="text-2xl text-text_green">
                Position: {item.position}{" "}
              </div>
              <div>Created by: {item.author} </div>
              <div>Location: {item.location} </div>
            </div>
            {activeIndex === index ? (
              <div className="pt-8 text-text_grey">{item.description}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default JobDetails