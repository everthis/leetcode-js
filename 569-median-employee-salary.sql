# Write your MySQL query statement below
SELECT a.Id, a.Company, a.Salary
FROM (
    SELECT e.Id, e.Company, e.Salary,
        IF(@prev = e.Company, @rank := @rank+1, @rank := 1) AS Ranking,
        @prev := e.Company
    FROM Employee e, (SELECT @rank := 0, @prev := 0) AS t
    ORDER BY e.Company, e.Salary #, e.Id
) AS a, (
    SELECT Company, COUNT(*) AS cnt
    FROM Employee
    GROUP BY Company
) AS b
WHERE a.Company = b.Company AND Ranking IN (FLOOR((cnt+1)/2), FLOOR((cnt+2)/2));
