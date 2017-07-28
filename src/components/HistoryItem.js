import React from 'react';
import '../styles/historyItem.css';

export const HistoryItem = ({ orderObj }) => {
  return (
    <div className='HistoryItem-item'>
      <h4 className='HistoryItem-totalCost'>{ orderObj.totalCost }</h4>
      <h4 className='HistoryItem-date'>{ orderObj.dateOrdered }</h4>
    </div>
  )
}
