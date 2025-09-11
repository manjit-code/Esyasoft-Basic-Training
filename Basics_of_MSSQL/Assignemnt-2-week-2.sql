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


--Task-1--
--Assignment-1--

WITH bookRank AS (
	SELECT u.user_id, u.name, b.title, b.price,
	ROW_NUMBER() OVER (PARTITION BY o.user_id ORDER BY b.price DESC) AS RowNum,
	RANK() OVER (PARTITION BY o.user_id ORDER BY b.price DESC) AS RankVal,
	DENSE_RANK() OVER (PARTITION BY o.user_id ORDER BY b.price DESC) AS DenseRankVal
	FROM books b INNER JOIN orders o ON o.product_id = b.product_id INNER JOIN users u ON u.user_id = o.user_id
)

SELECT bx.user_id, bx.name, bx.title, bx.price, bx.RowNum, bx.RankVal, bx.DenseRankVal FROM bookRank bx WHERE rowNum <= 2;



--Assignment-2--

SELECT u.user_id, u.name, SUM(b.price) AS TotalSpent, RANK() OVER (ORDER BY SUM(b.price) DESC) AS RankNum, DENSE_RANK() OVER (ORDER BY SUM(b.price) DESC) AS DenseRankNum
FROM orders o INNER JOIN users u ON o.user_id = u.user_id INNER JOIN books b ON o.product_id = b.product_id
GROUP BY u.user_id, u.name;