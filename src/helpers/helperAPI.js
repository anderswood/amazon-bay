
export default class helperAPI {
  async getInventory() {
    let inventory = await fetch('https://amazon-bay-be.herokuapp.com/api/v1/inventory')
    return inventory.json();
  }

};
