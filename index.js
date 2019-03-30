// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;
let mealId = 0;
let customerId = 0;
let deliveryId = 0;

class Neighborhood {
  constructor(name) {
    this.name = name;
    this.id = ++neighborhoodId;
    store.neighborhoods.push(this);
  }
}

class Customer {
  constructor(name, neighborhood) {
    this.name = name;
    if (neighborhood) {
      this.neighborhoodId = neighborhood.id;
    }
    store.customers.push(this);
  }
}

class Delivery {
  constructor(meal, neighborhood, customer) {
    if (meal) {
      this.mealId = meal.id;
    }
    if (neighborhood) {
      this.neighborhoodId = neighborhood.id;
    }
    if (customer) {
      this.customerId = customer.id;
    }
  }
}
