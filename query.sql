-- Active: 1693367672429@@147.139.210.135@5432@yasin01
CREATE DATABASE tugasBE;

CREATE TABLE recipe (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  ingredients TEXT NOT NULL,
  photo VARCHAR(200),
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES category(id)
);

CREATE TABLE category (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE users (
    id SERIAL,
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


SELECT * FROM recipe;

DELETE FROM recipe WHERE category_id=1;

INSERT INTO recipe(title,ingredients,category_id,photo) VALUES('Sate','Daging ayam, bawang merah, saos kacang.','1','https://placehold.co/600x400');

INSERT INTO users(username,password,email) VALUES('Ainz','lalala','Ainz@gmail.com');

INSERT INTO category (name) VALUES ('Makanan');
INSERT INTO category (name) VALUES ('Minuman');

INSERT INTO recipe (title, ingredients, photo, category_id) 
VALUES ('Nasi Goreng', 'Nasi, Bawang Merah, Bawang Putih, Telur, Kecap', 'nasi_goreng.jpg', 1);

INSERT INTO recipe (title, ingredients, photo, category_id) 
VALUES ('Es Teh Manis', 'Teh, Gula, Es Batu', 'es_teh_manis.jpg', 2);

DROP TABLE category;

SELECT * FROM recipe WHERE id = 1;

DROP DATABASE tugasBE;

TRUNCATE TABLE recipe;

TRUNCATE recipe RESTART IDENTITY;

CREATE TABLE
    recipe(
        id SERIAL,
        title VARCHAR NOT NULL,
        ingredients TEXT NOT NULL,
        category_id INTEGER NOT NULL,
        photo VARCHAR NOT NULL,
        created_at TIMESTAMP NOT NULL,
        user_id INT
    );

CREATE TABLE
    category(
        category_id SERIAL PRIMARY KEY,
        category_name VARCHAR NOT NULL
    );

CREATE TABLE
    users(
        id SERIAL,
        name VARCHAR NOT NULL,
        email VARCHAR NOT NULL,
        password VARCHAR NOT NULL
    );

INSERT INTO category(category_name) VALUES('main course');

INSERT INTO category(category_name) VALUES('desert');

INSERT INTO category(category_name) VALUES('appetizer');

ALTER TABLE users ADD COLUMN photo VARCHAR;

 SELECT 
    recipe.id,
    recipe.title,
    recipe.ingredients,
    recipe.photo,
    category.category_name AS category,
    users.name AS author
FROM 
    recipe
JOIN 
    category ON recipe.category_id = category.category_id
JOIN 
    users ON recipe.user_id = users.id;
