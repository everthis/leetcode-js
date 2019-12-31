# Write your MySQL query statement below
SELECT P.project_id, E.employee_id
FROM Project as P 
INNER JOIN Employee as E On E.employee_id = P.employee_id
WHERE (P.project_id , E.experience_years) in (
SELECT P.project_id, MAX(E.experience_years)
FROM Project as P 
INNER JOIN Employee as E On E.employee_id = P.employee_id
GROUP BY P.project_id);
