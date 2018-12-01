DROP DATABASE IF EXISTS flycart;
CREATE DATABASE flycart;
USE flycart;
CREATE  TABLE IF NOT EXISTS `products` (
		`product_name` VARCHAR(150) NOT NULL,
        `department_name` VARCHAR(150) NOT NULL,
        `price` INT NOT NULL,
        `stock_quantity` INT NOT NULL)
	ENGINE = InnoDB;

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Notebook', 'Computers', 499.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Flash Drive', 'Computers', 69.99, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Messenger Bag', 'Accessories', 79.99, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Airpods', 'Electronics', 129.99, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('MacBook', 'Computers', 1499.99, 18);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Headphones', 'Electronics', 99.99, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Tablet', 'Electronics', 299.99, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Camera', 'Electronics', 129.99, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('iPad', 'Electronics', 399.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('iPhone', 'Mobile Phones', 899.99, 35);