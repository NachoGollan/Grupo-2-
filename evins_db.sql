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
    passwd VARCHAR(100) NOT NULL,
    birthday DATE NOT NULL,
    image TEXT,
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
    descript TEXT,
	details TEXT,
    category_id INT,
	brand_id INT,
    offer BOOLEAN,
    discount DECIMAL,
    price DECIMAL NOT NULL,
    imported BOOLEAN,
    image TEXT,
    PRIMARY KEY (product_id),
    FOREIGN KEY (category_id) REFERENCES category(id),
    FOREIGN KEY (brand_id) REFERENCES brand(id)
    );
    
INSERT INTO category VALUES 
	(NULL, 'Vinos'),
    (NULL, 'Espumantes'),
    (NULL, 'Destilados'),
    (NULL, 'Accesorios');
    
INSERT INTO brand VALUES 
	(NULL, 'Alma Mora'),
    (NULL, 'Animal'),
    (NULL, 'Bressia'),
	(NULL, 'Claroscuro'),
	(NULL, 'Cicchiti'),
    (NULL, 'El Enemigo'),
    (NULL, 'Finca Las Moras'),
    (NULL, 'Gouguenheim'),
    (NULL, 'Huentala'),
    (NULL, 'Las Perdices'),
    (NULL, 'Nieto Senetiner'),
    (NULL, 'Rutini'),
    (NULL, 'Yacochuya');
    
    INSERT INTO users_roles VALUES 
	(NULL, 'Admin'),
    (NULL, 'Usuario'),
    (NULL, 'Visitante')

    
    
