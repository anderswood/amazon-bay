import React from 'react';
import '../styles/inventoryItem.css';

export const InventoryItem = ({ invItemObj }) => {

  return (
    <div className='InvItem-card'>
      <h3 className='InvItem-title'>{ invItemObj.invTitle }</h3>
      <p className='InvItem-descr'>{ invItemObj.invDescription }</p>
      <img className='InvItem-img' alt={invItemObj.invTitle} src={invItemObj.invImgURL}></img>
      <h4 className='InvItem-price'>Price: ${ invItemObj.invPrice / 100 }</h4>
    </div>
  )
}
