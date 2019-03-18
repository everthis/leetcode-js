# Write your MySQL query statement below
SELECT d1.Name AS Department
    , e1.Name AS Employee
    , e1.Salary AS Salary
FROM (
    SELECT d.Id
        , MAX(d.Name) AS Name
        , MAX(e.Salary) AS Salary
    FROM Department d
    JOIN Employee e
    ON e.DepartmentId = d.Id
    GROUP BY d.Id
) d1
JOIN Employee e1
ON d1.Id = e1.DepartmentId AND e1.Salary = d1.Salary
