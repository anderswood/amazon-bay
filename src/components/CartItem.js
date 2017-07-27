import React from 'react';
import '../styles/cartItem.css';

export const CartItem = ({ cartItemObj }) => {
  return (
    <div className='CartItem-item'>
      <h4 className='CartItem-title'>{ cartItemObj.title }</h4>
      <h4 className='CartItem-price'>${ cartItemObj.price / 100 }</h4>
    </div>

  )
}
