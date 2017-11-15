import React from 'react';

export default ({value, currency}) => {
  const currencySymbols = {RUB: '₽', EUR: '€', GBP: '£', USD: '$'};
  const string = value.toString();
  const pointPosition = string.indexOf('.');

  return <span>
    {pointPosition === -1 ? <span>{string}</span> : <span>{string.slice(0, pointPosition)}</span>}
    {pointPosition !== -1 && <span>,{string.slice(pointPosition + 1)}</span>}
    {currency && <span>{currencySymbols[currency]}</span>}
    </span>;
}
