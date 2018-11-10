DROP DATABASE IF EXISTS bamazondb;
CREATE DATABASE bamazondb;
USE bamazondb;
CREATE  TABLE IF NOT EXISTS `customers`;
CREATE  TABLE IF NOT EXISTS `products` (
		`product_name` VARCHAR(150) NOT NULL,
        `department_name` VARCHAR(150) NOT NULL,
        `price` INT NOT NULL,
        `stock_quanitity` INT NOT NULL
	ENGINE = InnoDB;

INSERT INTO products (product_name, department_name, price, stock_quantity, createdAt, updatedAt) VALUES ('Notebook', 'Computers', 499.99, 10, NOW(), NOW());
INSERT INTO products (product_name, department_name, price, stock_quantity, createdAt, updatedAt) VALUES ('Flash Drive', 'Computers', 69.99, 100, NOW(), NOW());
INSERT INTO products (product_name, department_name, price, stock_quantity, createdAt, updatedAt) VALUES ('Messenger Bag', 'Accessories', 79.99, 15, NOW(), NOW());
INSERT INTO products (product_name, department_name, price, stock_quantity, createdAt, updatedAt) VALUES ('Airpods', 'Electronics', 129.99, 20, NOW(), NOW());
INSERT INTO products (product_name, department_name, price, stock_quantity, createdAt, updatedAt) VALUES ('MacBook', 'Computers', 1499.99, 18, NOW(), NOW());
INSERT INTO products (product_name, department_name, price, stock_quantity, createdAt, updatedAt) VALUES ('Headphones', 'Electronics', 99.99, 30, NOW(), NOW());
INSERT INTO products (product_name, department_name, price, stock_quantity, createdAt, updatedAt) VALUES ('Tablet', 'Electronics', 299.99, 25, NOW(), NOW());
INSERT INTO products (product_name, department_name, price, stock_quantity, createdAt, updatedAt) VALUES ('Camera', 'Electronics', 129.99, 50, NOW(), NOW());
INSERT INTO products (product_name, department_name, price, stock_quantity, createdAt, updatedAt) VALUES ('iPad', 'Electronics', 399.99, 10, NOW(), NOW());
INSERT INTO products (product_name, department_name, price, stock_quantity, createdAt, updatedAt) VALUES ('iPhone', 'Mobile Phones', 899.99, 35, NOW(), NOW());