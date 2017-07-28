import React from 'react';
import moment from 'moment';
import '../styles/cartList.css';

import { CartItem } from './CartItem';
import Arrow from '../icons/left-arrow';

export const CartList = ({ cart, addOrderToHistory }) => {

  const cartListArr = cart.map((cartItem, i) => {
    return <CartItem key={ i }
      cartItemObj={ cartItem }/>
  });

  const totalCost = cart.reduce((acc, item) => {
    acc += item.price / 100;
    return acc;
  }, 0)

  const dateOrdered = moment(Date.now()).format('MM/DD/YYYY, h:mm a');

  const handleCheckout = () => {
    addOrderToHistory({
      totalCost: '$' + totalCost.toFixed(2),
      dateOrdered: dateOrdered
    });
  }

  const cartStatus = () => {
    return cart.length
      ? cartListArr
      : <h4>Cart Is Empty... Buy Some Shit!</h4>;
  }

  return (
    <section className='CartList-container'>
      <div className='CartList-leftSide'>
        <label className='CartList-leftArrow'><Arrow/></label>
      </div>
      <div className='CartList-rightSide'>
        <div className='CartList-header'>
          <h2>Shopping Cart</h2>
          <button className='CardList-checkoutBtn'
            onClick={() => handleCheckout()}>
            <h4 className='CardList-checkout'>Checkout</h4>
          </button>
        </div>
        <div className='CartList-items'>{ cartStatus() }</div>
        <div className='CartList-totalCost'>Total Cost: ${ totalCost.toFixed(2) }</div>
      </div>
    </section>
  );
}
