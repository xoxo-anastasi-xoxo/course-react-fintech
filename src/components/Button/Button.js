import React from 'react';

export default ({type, onClick, children}) =>
  <button type={type} onClick={onClick}>
    {children}
  </button>;
