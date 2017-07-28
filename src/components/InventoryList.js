import React from 'react';
import '../styles/inventoryList.css';

import { InventoryItem } from './InventoryItem';

export const InventoryList = ({ inventory, addItemToCart }) => {
  if(!inventory.length) { return <div></div>; }

  const inventoryListArr = inventory.map((invItem, i) => {
    return <InventoryItem key={ i }
      invItemObj={ invItem }
      addItemToCart={ addItemToCart }/>
  });

  return(
    <section className='InvList-container' >{ inventoryListArr }</section>
  );
}
