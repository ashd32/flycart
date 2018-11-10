module.exports = function (sequelize, DataTypes) {
    const Customer = sequelize.define("Customer", {
        customer_name: DataTypes.STRING
    });
    return Customer;
};