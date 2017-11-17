import React from 'react';
import Money from '../Money/Money';

import './TimelineItem.css';

export default ({ title, price, category, account, type }) => (
  <div className='TimelineItem'>
    <div className='TimelineItem__operations'>
      <div className='TimelineItem__operations-account'>
        {account}
      </div>
      <div className='TimelineItem__operations-title'>
        {title}
      </div>
    </div>

    <div className='TimelineItem__total'>
      <div className='TimelineItem__total-money'>
        <Money value={price} />
      </div>
      <div className='TimelineItem__total-category'>
        {type}
      </div>
    </div>
    <div>
    </div>
  </div>
);
