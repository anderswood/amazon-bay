import React, { Component } from 'react';
import '../styles/app.css';

import helperAPI from '../helpers/helperAPI';
import { InventoryList } from './InventoryList';
import { HistoryList } from './HistoryList';
import { CartList } from './CartList';

let appHelperAPI = new helperAPI();

class App extends Component {
  constructor () {
    super();
    this.state = {
      inventory: [],
      cart: [],
      orderHistory: []
    };
  }

  componentDidMount () {
    let inventoryList;
    appHelperAPI.getInventory()
    .then(invList => {
      inventoryList = invList;
      appHelperAPI.getOrderHistory()
      .then(orderHistList => {
        let storedCartItems = JSON.parse(localStorage.getItem('ShoppingCart')) || [];
        this.setState({
          inventory: inventoryList,
          cart: storedCartItems || [],
          orderHistory: orderHistList
        });
      });
    });
  }

  addItemToCart (cartItem) {
    let updatedInventory = this.state.cart;
    updatedInventory.push({
      title: cartItem.invTitle,
      price: cartItem.invPrice
    });
    this.setState({ cart: updatedInventory });
    localStorage.setItem('ShoppingCart', JSON.stringify(updatedInventory));
  }

  addOrderToHistory (orderObj) {
    appHelperAPI.postOrderHistory(orderObj);
    let orderHistory = this.state.orderHistory;
    orderHistory.push(orderObj);
    localStorage.clear();
    this.setState({
      oderHistory: orderHistory,
      cart: []
    })
  }

  deleteOrderHistory () {
    appHelperAPI.deleteOrderHistory()
    .then(() => {
      this.setState({
        orderHistory: []
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Amazon<span id='bay'>Bay</span></h1>
        </header>
        <InventoryList inventory={ this.state.inventory }
          addItemToCart={ this.addItemToCart.bind(this) }/>
        <HistoryList orderHistory={ this.state.orderHistory }
          deleteOrderHistory={ this.deleteOrderHistory.bind(this) }/>
        <CartList cart={ this.state.cart }
          addOrderToHistory={ this.addOrderToHistory.bind(this) }/>
      </div>
    );
  }
}

export default App;
