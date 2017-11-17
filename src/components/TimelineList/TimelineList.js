import React from 'react';
import TimelineItem from '../TimelineItem/TimelineItem';
import TimelineDelimiter from '../TimelineDelimiter/TimelineDelimiter';
import './TimelineList.css';

export default ( {items }) => {
  const keysOperation = Object.keys(items);
  console.log('********');
  console.log(items);
  console.log(keysOperation);
  return (
    <div className='TimelineList'>
    <TimelineDelimiter/>
    {keysOperation.length === 0 && <div className='TimelineList__empty'>Еще нет событий</div>}
    {keysOperation.map((key, index) => {
      const item = items[key];

      return <TimelineItem key={key} title={item.title} price={item.price} type={item.type} /*account={item.account}*//>;
    })}
  </div>
  );
};
