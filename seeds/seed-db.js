// Import Database Models
// =============================================================
const db = require('../models');

// Syncing our sequelize models 
        // KEEP IN MIND that mySQL uses double quotes for strings

// =============================================================

const items = [
    {
        productName: "Dell Notebook",
        departmentName: 'Computers',
        price: 499.99,
        stock: 10
    }, {
        productName: "SanDisk Flash Drive",
        departmentName: 'Computers',
        price: 69.99,
        stock: 100
    }, {
        productName: "Samsonite Messenger Bag",
        departmentName: 'Accessories',
        price: 79.99,
        stock: 15
    }, {
        productName: "Apple Airpods",
        departmentName: 'Electronics',
        price: 129.99,
        stock: 20
    }, {
        productName: "Apple MacBook",
        departmentName: 'Computers',
        price: 1499.99,
        stock: 18
    }, {
        productName: "JBL Headphones",
        departmentName: 'Electronics',
        price: 299.99,
        stock: 25
    }, {
        productName: "LG Tablet",
        departmentName: 'Electronics',
        price: 299.99,
        stock: 25
    }, {
        productName: "Canon Camera",
        departmentName: "Imaging Devices",
        price: 129.99,
        stock: 50
    }, {
        productName: 'Apple iPad',
        departmentName: 'Electronics',
        price: 399.99,
        stock: 10
    }, {
        productName: "Apple iPhone",
        departmentName: "Mobile Phones",
        price: 899.99,
        stock: 35
    },
];

db.sequelize.sync({ force: true }).then(function () {
    db.Product.bulkCreate(items)
        .then(function (rows) {
            console.log("\n\nINSERTED\n\n");
            db.sequelize.close();
        })
        .catch(function(err) {
            console.log("\n\nError:", err);
            db.sequelize.close();
        });
});