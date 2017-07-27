import React, { Component } from 'react';
import '../styles/app.css';

import { InventoryList } from './InventoryList';
import { CartList } from './CartList';
import helperAPI from '../helpers/helperAPI';

let appHelperAPI = new helperAPI();

class App extends Component {
  constructor () {
    super();
    this.state = {
      inventory: [],
      cart: [
        {title: 'title1', price: 299},
        {title: 'title2', price: 599}
      ]
    };
  }

  componentDidMount () {
    appHelperAPI.getInventory()
    .then(res => {
      console.log(res);
      this.setState({inventory: res});
    });
  }

  addItemToCart () {

  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Amazon<span id='bay'>Bay</span></h1>
        </header>
        <InventoryList inventory={ this.state.inventory } />
        <CartList cart={ this.state.cart } />
      </div>
    );
  }
}

export default App;
