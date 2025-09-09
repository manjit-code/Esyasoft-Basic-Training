CREATE DATABASE Assignment1;

CREATE TABLE Customers(CustomerId INT PRIMARY KEY, cName VARCHAR(30), Address VARCHAR(50), Region VARCHAR(10));

CREATE TABLE SmartMeterReadings(MeterId INT PRIMARY KEY, CustomerId INT, Location VARCHAR(50), InstalledDate DATE, ReadingDateTime DATETIME, EnergyConsumed FLOAT, FOREIGN KEY (CustomerId) REFERENCES Customers(CustomerId));

INSERT INTO Customers VALUES
(1, 'Manjit', 'B-265, Rourkela, Odisha', 'East'),
(2, 'Soumyadip', 'Abdul Nagar, Kolkata, West Bengal', 'West'),
(3, 'Sahil', 'Kolhapur, Rajasthan', 'North'),
(4, 'Rishav', 'Howda, Kolkata, West Bengal', 'East'),
(5, 'Aniket', 'Bilei, Bihar', 'East');

UPDATE Customers SET Region = 'West' WHERE CustomerId = 4;

SELECT * FROM Customers;

TRUNCATE TABLE SmartMeterReadings;

INSERT INTO SmartMeterReadings VALUES
(101, 3, 'Roof Top', '2000-12-17', '2024-05-01 10:11:00', 25.05),
(102, 2, 'Basement', '2005-01-15', '2024-07-01 11:40:00', 30.11),
(103, 1, 'Roof Top', '2009-06-21', '2021-03-01 09:41:00', 90.10),
(105, 5, 'Basement', '2011-07-19', '2023-05-01 01:11:00', 21.90),
(104, 4, 'Roof Top', '2025-03-11', '2025-09-01 10:15:00', 67.40);

SELECT * FROM Customers;
SELECT * FROM SmartMeterReadings;

--- Task-1 --- WITH JOINS--
-- A --
SELECT * FROM Customers c INNER JOIN SmartMeterReadings s ON c.CustomerId = s.CustomerId
WHERE s.EnergyConsumed > 10 AND s.EnergyConsumed < 50;

-- B --
SELECT * FROM Customers c INNER JOIN SmartMeterReadings s ON c.CustomerId = s.CustomerId
WHERE s.ReadingDateTime > '2024-01-01' AND s.ReadingDateTime <'2024-12-31';

-- C --
SELECT * FROM Customers c INNER JOIN SmartMeterReadings s ON c.CustomerId = s.CustomerId
WHERE s.InstalledDate < '2024-06-30';


--- Task-1 ---(Without JOINS)
-- A --
SELECT MeterId, ReadingDateTime, EnergyConsumed FROM SmartMeterReadings
WHERE EnergyConsumed > 10 AND EnergyConsumed < 50;

-- B --
SELECT MeterId, ReadingDateTime, EnergyConsumed FROM SmartMeterReadings
WHERE ReadingDateTime > '2024-01-01' AND ReadingDateTime <'2024-12-31';

-- C --
SELECT MeterId, ReadingDateTime, EnergyConsumed FROM SmartMeterReadings
WHERE InstalledDate < '2024-06-30';





--- Task-2---
-- A --
SELECT CustomerId, AVG(EnergyConsumed) AS 'AvgEnergyConsumed', MAX(EnergyConsumed) AS 'MaxEnergyConsumed'
FROM SmartMeterReadings 
GROUP BY CustomerId;

-- B --
--Same as A --

-- c --
SELECT * FROM SmartMeterReadings 
WHERE ReadingDateTime BETWEEN '2024-01-01' AND '2024-12-31';







