DROP DATABASE IF EXISTS evins_db;
CREATE DATABASE evins_db;
USE evins_db;

DROP TABLE IF EXISTS users_roles;
CREATE TABLE users_roles (
	id INT AUTO_INCREMENT NOT NULL,
    role_name VARCHAR(200) NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
	user_id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(50) NOT NULL UNIQUE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE,
    psswd VARCHAR(100) NOT NULL,
    birthday DATE NOT NULL,
    image BLOB,
    role_id INT NOT NULL,
    PRIMARY KEY (user_id),
    FOREIGN KEY (role_id) REFERENCES users_roles(id)
    );
    
DROP TABLE IF EXISTS category;
CREATE TABLE category (
	id INT AUTO_INCREMENT NOT NULL,
	cat_name VARCHAR(200) NOT NULL,
    PRIMARY KEY(id)
    );

DROP TABLE IF EXISTS brand;
CREATE TABLE brand (
	id INT AUTO_INCREMENT NOT NULL,
	brand_name VARCHAR(200) NOT NULL,
    PRIMARY KEY(id)
    );
    
DROP TABLE IF EXISTS products;
CREATE TABLE products (
	product_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(200) NOT NULL UNIQUE,
    descript TEXT NOT NULL,
    category_id INT NOT NULL,
    brand_id INT NOT NULL,
    offer BOOLEAN UNIQUE,
    discount DECIMAL,
    price DECIMAL NOT NULL,
    imported BOOLEAN,
    image BLOB,
    PRIMARY KEY (product_id),
    FOREIGN KEY (category_id) REFERENCES category(id),
    FOREIGN KEY (brand_id) REFERENCES brand(id)
    );
    
