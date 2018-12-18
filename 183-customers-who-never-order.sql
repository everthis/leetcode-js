# Write your MySQL query statement below
SELECT A.Name AS `Customers` from Customers A
WHERE A.Id NOT IN (SELECT B.CustomerId from Orders B);
