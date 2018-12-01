const db = require('../models');

module.exports = function (app) {

  app.get('/api/products', function (req, res) {
    db.Product.findAll({}).then(function (rows) {
      res.json(rows)
    }).catch(function (error) {
      res.json({ error: error });
    });
  });

  app.get('/api/products/:department_name', function (req, res) {
    db.Product.findAll({
      where: {
        department_name: req.params.department_name
      }
    }).then(function (data) {
      res.json(data);
    }).catch(function (err) {
      res.json(err);
    })
  });
}