module.exports = function (connection, Sequelize) {
	const Product = connection.define(
		"Product",
		{
			product_name: Sequelize.STRING,
			department_name: Sequelize.STRING,
			price: Sequelize.STRING,
			stock_quantity: Sequelize.INTEGER
		});

	return Product;
};
