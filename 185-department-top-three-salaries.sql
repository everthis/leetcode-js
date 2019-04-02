# Write your MySQL query statement below
SELECT D.Name AS Department, E.Name AS Employee, E.Salary AS Salary 
FROM Employee E, Department D
WHERE (SELECT COUNT(DISTINCT(Salary)) FROM Employee 
       WHERE DepartmentId = E.DepartmentId AND Salary > E.Salary) < 3
AND E.DepartmentId = D.Id 
ORDER by E.DepartmentId, E.Salary DESC;
