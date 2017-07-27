import React from 'react';
import '../styles/cartList.css';

import { CartItem } from './CartItem';

export const CartList = ({ cart }) => {
  if(!cart.length) { return <div></div>; }

  const cartListArr = cart.map((cartItem, i) => {
    return <CartItem key={ i }
      cartItemObj={ cartItem }/>
  });

  const totalCost = cart.reduce((acc, item) => {
    acc += item.price / 100;
    return acc;
  }, 0)

  return (
    <section className='CartList-container'>
      <div className='CartList-items'>{ cartListArr }</div>
      <div className='CartList-totalCost'>Total Cost: ${ totalCost }</div>
    </section>
  );
}
