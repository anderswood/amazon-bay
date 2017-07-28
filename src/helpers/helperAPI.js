
export default class helperAPI {
  async getInventory () {
    let inventory = await fetch('https://amazon-bay-be.herokuapp.com/api/v1/inventory')
    return inventory.json();
  }

  async getOrderHistory () {
    let orderHistory = await fetch('https://amazon-bay-be.herokuapp.com/api/v1/orderHistory');
    return orderHistory.json();
  }

  async postOrderHistory (orderObj) {
    await fetch('https://amazon-bay-be.herokuapp.com/api/v1/orderHistory', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(orderObj)
    });
  }

  async deleteOrderHistory () {
    await fetch('https://amazon-bay-be.herokuapp.com/api/v1/orderHistory', {
      method: 'DELETE'
    });
  }

};
