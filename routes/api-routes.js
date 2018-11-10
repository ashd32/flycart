const RestfulAPI = require('./RestClass');
const models = require('../models');

module.exports = function (app) {
  
  const products = new RestfulAPI('products', app, models.Product);
  products.findAll();
  products.find('product_name');
  products.create();
  products.delete('product_name');
  products.update('product_name');

//   const customers = new RestfulAPI('customers', app, models.Customer);
//   products.findAll();
//   products.find('customer_name');
//   products.create();
//   products.delete('customer_name');
//   products.update('customer_name');
// console.log(customer_name.findAll);
};