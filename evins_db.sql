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

 
INSERT INTO products (product_id, product_name, descript, details, category_id, brand_id, offer, discount, price, imported, image) VALUES
(1, 'Alma negra', 'Barrica 100% roble francés. Tiempo en barrica 16 meses', 'Bodega: Ernesto Catena. Cosecha: 2016. Varietal: Corte', 1, 1, 1, 5, 4000, 0, "alma-negra.png"),
(2, 'Ciccitti Sangiovese', 'Rojo Rubi, en nariz frutos rojos y notas de café ', 'Bodega: Cicchitti Cosecha: 2012 Varietal: Sangiovese', 1, 5, 1, 10, 2400, 0, "Ciccitti.jpeg"),
(3, 'Claroscuro Cabernet Franc', 'En boca presenta un notable volumen, dada la perfecta madurez de esta cosecha, con alcohol moderado y acidez natural balanceada. La concentración de sabores y la persistencia hacen de éste, un típico Cabernet franc de zonas frías.', 'Bodega: Claroscuro. Cosecha: 2018. Varietal: Cabernet Franc', 1, 4, 0, 0, 2200, 0, "claroscuro-cabernet.png"),
(4, 'Claroscuro Malbec', 'Marcados tonos azulados y violáceos típicos del Malbec. Resaltan aromas florales (violetas) característicos de Vistaflores enriquecidos por frutos rojos y otros aromas complejos aportados por el añejamiento', 'Bodega: Claroscuro. Cosecha: 2015. Varietal: Malbec', 1, 4, 0, 0, 2500, 0, "claroscuro-malbec.png"),
(5, 'Tinto negro rosé', 'Notas de Cata: De color rosado intenso y brillante, aromas de frutos rojos, frambuesas y cerezas con un dejo floral.', 'Bodega: Las perdices. Cosecha: 2015. Varietal: Malbec', 1, 10, 1, 5, 1400, 0, "tinto-negro-rose.jpg"),
(6, 'Animal', '70% Chardonnay- 30% Pinot Noir Tiempo: 10 meses en botella. Altura 1100 snm. Cosecha manual: Si. Fermentación: 25 días. Temp. Max 12 c. Estabilización -4 c. Clarificación: No. Filtración: No', 'Bodega: Ernesto Catena. Cosecha: 2016.', 2, 2, 0, 0, 1200, 0, "animal-chardonay.jpeg"),
(7, 'Trumpeter', 'Espumante extra brut', 'Bodega: Rutini. Cosecha: 2016. ', 2, 12, 0, 0, 2200, 0, "trumpeter-extra-brut.jpg"),
(8, 'Finca las moras', 'Espumante extra brut', 'Bodega: Las moras. Cosecha: 2017.', 2, 7, 0, 0, 2000, 0, "default.jpg"),
(9, 'Santa Teresa añejo', 'Ron añejo gran reserva.', '', 3, 9, 1, 5, 4000, 0, "santa-teresa.jpg"),
(10,'Flor de caña', 'Ron añejo claro', '', 3, 13, 0, 0, 3200, 0, "flor-de-cania.jpg"),
(11, 'Hendricks', 'Gin', 'Gin 15 años', 3, 9, 0, 0, 11000, 1, "Hendricks-gin.jpg"),
(12, 'Tanqueray', '750ml doblemente destilado', '', 3, 9, 0, 0, 4700, 1, "Tanqueray.jpg"),
(13, 'Rutini extra brut', 'Rutini extra brut ', 'Bodega: Rutini. Cosecha: 2018.', 2, 12, 0, 0, 4000, 0, "rutini-extra-brut.jpg");


    
    
