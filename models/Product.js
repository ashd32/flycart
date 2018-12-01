module.exports = function (connection, Sequelize) {
	const Product = connection.define(

// Defines Schema for Sequelize
		"Product",
		{
			product_name: Sequelize.STRING,
			department_name: Sequelize.STRING,
			price: Sequelize.INTEGER,
			stock_quantity: Sequelize.INTEGER
		});

	return Product;
};