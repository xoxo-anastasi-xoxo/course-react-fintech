import React from 'react';
import TimelineItem from '../TimelineItem/TimelineItem';
import './TimelineList.css';

export default ({ items }) => {
  let index = 1;

  return <div className='List'>
    {items.map((item) =>
      <div key={index++}>
        <TimelineItem title={item.title} price={item.price} type={item.type} />
      </div>)}
  </div>
}
