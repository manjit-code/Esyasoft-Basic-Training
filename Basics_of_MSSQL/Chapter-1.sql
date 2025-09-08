USE manjit;

-- users table--
CREATE TABLE users(user_id INT PRIMARY KEY, email VARCHAR(20) UNIQUE, name VARCHAR(50));

SELECT * FROM users;

--books table--
CREATE TABLE books(product_id INT PRIMARY KEY, title VARCHAR(50), price FLOAT);

SELECT * FROM books;

-- orders--
CREATE TABLE orders(order_no INT PRIMARY KEY, user_id INT, product_id INT, FOREIGN KEY (user_id) REFERENCES users (user_id), 
FOREIGN KEY (product_id) REFERENCES books (product_id));

SELECT * FROM orders;

ALTER TABLE users ALTER COLUMN email VARCHAR(50);

-- users table data insert --
INSERT INTO users(user_id, email, name) VALUES
(1, 'callmebhai@gmail.com', 'Gopal'),
(2, 'toxicmanji@gmail.com', 'Manjit'),
(3, 'kalajadu@gmail.com', 'Soumyadeep'),
(4, 'vimalpanmasala@gmail.com', 'JaiSai'),
(5, 'ghostlaugh@gmail.com', 'Namitha');

-- books table data insert --
INSERT INTO books VALUES
(101, 'MSSQL', 100),
(102, 'Half Girlfriend', 699),
(103, 'Black Magic',700),
(104, 'How to Marfa', 2000),
(105, 'How to Laugh', 2001.99);

-- orders table data insert --
INSERT INTO orders VALUES
(401, 1, 101), (402, 2,  102), (403, 2, 103), (404, 3, 104), (405, 3, 103), (406, 4, 102), (407, 5, 102), (408, 5, 105);


-- Show books purchased by each user--
-- users.user_id, users.name, books.title, orders.order_id---

SELECT u.user_id, u.name, b.title, o.order_no FROM users u INNER JOIN orders o ON u.user_id = o.user_id
INNER JOIN books b ON o.product_id = b.product_id;

SELECT * FROM users u INNER JOIN orders o ON u.user_id = o.user_id
INNER JOIN books b ON o.product_id = b.product_id;

-- Find who have purchased 'Black Magic' Book
SELECT * FROM users u INNER JOIN orders o ON u.user_id = o.user_id
INNER JOIN books b ON o.product_id = b.product_id 
WHERE o.product_id = (SELECT product_id FROM books WHERE title = 'Black Magic');

--- Find most expencive book---
SELECT * FROM users u INNER JOIN orders o ON u.user_id = o.user_id
INNER JOIN books b ON o.product_id = b.product_id WHERE b.price = (SELECT MAX(price) FROM books);