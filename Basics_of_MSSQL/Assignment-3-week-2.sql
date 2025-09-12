--Tasks:
--Show a list of all student names (unique only).

--Show a list of all student names (including duplicates).

--(Hint: Use UNION and UNION ALL)

use manjit;

SELECT * FROM University;
INSERT INTO University VALUES ( 'Uday', 'BT', 90000, 'uday.kiranx@nitrkl.ac.in');

SELECT Names FROM University 
UNION
SELECT Names FROM University;


--Tasks:
--Display employee names in UPPERCASE and LOWERCASE.

--Find the length of each employee’s name.

--Show only the first 3 letters of each name.

--Replace Finance department with Accounts.

--Create a new column showing "Name - Department" using CONCAT.
SELECT * FROM Employee;

SELECT UPPER(Names) as uName, LOWER(Names) AS lName, SUBSTRING(Names, 1, 3) as subName, REPLACE(Dept, 'Finace', 'Accounts') AS Department, CONCAT(Names, Dept) AS 'Name-Department' FROM Employee;


--Date Functions (DATEDIFF, DATEADD, GETDATE, NOW)

--Tasks:
--Show today’s date using GETDATE().
SELECT GETDATE();

-----------
CREATE TABLE Projects (ProjectID INT, Name VARCHAR(50), StartDate DATE, EndDate DATE);
INSERT INTO Projects VALUES 
(1,'Bank App','2025-01-01','2025-03-15'),
(2,'E-Commerce','2025-02-10','2025-05-20');

SELECT * FROM Projects;

--Find the duration (in days) of each project using DATEDIFF.
SELECT *, DATEDIFF(DAY,StartDate, EndDate) AS Duration FROM Projects;

--Add 10 days to each project’s EndDate using DATEADD.
SELECT *, DATEDIFF(DAY,StartDate, EndDate)+10 AS Duration FROM Projects;

--Find how many days are left until each project ends. (Hint: Use DATEDIFF with GETDATE())
SELECT *, DATEDIFF(DAY,GETDATE(), EndDate) AS DaysLeft FROM Projects;


--Tasks:
--Convert today’s date into DD/MM/YYYY format using CONVERT.
SELECT CONVERT(VARCHAR(10), GETDATE(), 103) AS DATE_DDMMYY;

--Convert a float 123.456 into an integer using CAST.
SELECT CAST(123.456 AS INT);



