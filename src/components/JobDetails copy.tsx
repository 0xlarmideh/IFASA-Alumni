import React, { MouseEventHandler } from 'react';

interface Props {
  author: string;
  position: string;
  description: string;
  location: string;
  payRange: string;
  id: number
}

type OnClick = {
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
};

// const newArr: Props = {author: 'test', position: 'test', description: 'test', location: 'test', payRange: 'test', id: 1}

export const JobDetailss = (props:Props[]) => {
  const [expanded, setExpanded] = React.useState<{[id: number]: boolean}>({})

  const toggleExpand = (
    event: MouseEventHandler | void,
    id: number
  ) => {
    event.preventDefault();
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [id]: !prevExpanded[id],
    }));
  };
  return (
    <div className='bg-primary text-white'>
      {props.map((item:any) => {
        return (
          <div className='flex justify-between'>
        <div>Author: {item.author} </div>
        <div>Position: {item.position} </div>
        <div>Location: {item.location} </div>
        <div onClick={toggleExpand(event, item.id)} ></div>
      </div>
        )

      })}
      
    </div>
  )
}
