# Write your MySQL query statement below
SELECT Name AS Employee FROM Employee AS E,
(SELECT DISTINCT Id, Salary FROM Employee) AS M
WHERE E.ManagerId = M.Id AND E.Salary > M.Salary
