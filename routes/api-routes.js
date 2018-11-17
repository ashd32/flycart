const RestfulAPI = require('./RestClass');
const models = require('../models');

module.exports = function (app) {

  const products = new RestfulAPI('products', app, models.Product);
  products.findAll();
  products.find('product_name');
  products.create();
  products.delete();
  products.update('product_name');