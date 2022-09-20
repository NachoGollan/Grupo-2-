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
    (NULL, 'Visitante');
    
    
INSERT INTO users  VALUES
 (1, 'Avie Tye', 'Avie', 'Tye', 'atye0@state.tx.us', 'DWVVGwm', '11/03/2021', 'http://dummyimage.com/235x100.png/5fa2dd/ffffff', 3),
 (2, 'Selia Lansley', 'Selia', 'Lansley', 'slansley1@china.com.cn', 'A6fxQK7', '01/29/2022', 'http://dummyimage.com/163x100.png/dddddd/000000', 3),
 (3, 'Jessamine O''Fearguise', 'Jessamine', 'O''Fearguise', 'jofearguise2@pcworld.com', 'p01XHmu2QB', '08/15/2022', 'http://dummyimage.com/106x100.png/cc0000/ffffff', 1),
 (4, 'Daisey Gyles', 'Daisey', 'Gyles', 'dgyles3@about.me', 'wFDPQH3LjDal', '04/01/2022', 'http://dummyimage.com/162x100.png/ff4444/ffffff', 2),
 (5, 'Sutherlan Pevreal', 'Sutherlan', 'Pevreal', 'spevreal4@hostgator.com', 'MmI2Qsiw6', '10/28/2021', 'http://dummyimage.com/240x100.png/dddddd/000000', 3);

 INSERT INTO products  VALUES    
(5, 'Brekke Inc', 'mi in porttitor pede justo eu massa donec dapibus duis at velit', 'morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus', 1, 1, 57, 166, false),
(6, 'Carroll Group', 'potenti cras in purus eu magna vulputate luctus cum sociis', 'aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh', 4, 11, 35, 133, false),
(7, 'O''Hara, Jacobson and Corwin', 'nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non', 'morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed', 3, 5, 21, 557, false),
(8, 'Daugherty, Tillman and Gerhold', 'dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam', 'nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget', 2, 13, 14, 248, false),
(9, 'O''Hara Group', 'ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin', 'nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat', 3, 2, 27, 128, true),
(10, 'Halvorson, Casper and Senger', 'ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at', 'leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat', 3, 12, 35, 939, true),
(11, 'Kassulke, Dicki and Hermiston', 'cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel', 'tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum', 3, 4, 22, 371, true),
(12, 'Effertz Group', 'nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan', 'ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis', 2, 9, 67, 947, false),
(13, 'Rowe-Hills', 'aenean fermentum donec ut mauris eget massa tempor convallis nulla neque', 'mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit', 1, 7, 25, 958, false),
(14, 'Klein and Sons', 'fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam', 'porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam', 2, 5, 31, 718, true),
(15, 'Frami and Sons', 'nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo', 'etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris', 4, 8, 75, 824, true),
(16, 'Huel LLC', 'tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae', 'eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat', 4, 12, 63, 610, false),
(17, 'Ernser, Langosh and Feeney', 'eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante', 'eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed', 1, 13, 37, 662, false),
(18, 'O''Connell Group', 'ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec', 'aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac', 1, 1, 72, 845, false),
(19, 'Johns Inc', 'enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit', 'lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in', 1, 8, 8, 551, true);

    
    
