import React from 'react';
import '../styles/historyList.css';

import { HistoryItem } from './HistoryItem';

export const HistoryList = ({ orderHistory, deleteOrderHistory }) => {

  const orderHistoryArr = orderHistory.map((order, i) => {
    return <HistoryItem key={ i }
      orderObj={ order }/>
  })

  const orderHistoryStatus = () => {
    return orderHistory.length
      ? orderHistoryArr
      : <h4>No Orders... Buy Some Shit!</h4>;
  }

  const handleDeleteOrderHistory = () => {
    deleteOrderHistory();
  }

  return (
    <section className='HistoryList-container'>
      <div className='HistoryList-header'>
        <h2>Order History</h2>
        <button className='HistoryList-clear' onClick={() => handleDeleteOrderHistory() }><h4>X</h4></button>
      </div>
      <div className='HistoryList-items'>{ orderHistoryStatus() }</div>
    </section>
  )
}
