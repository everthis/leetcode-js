# Write your MySQL query statement below
SELECT Employee.name, Bonus.bonus 
from Employee LEFT JOIN Bonus ON
Employee.empid = Bonus.empid
WHERE bonus is null or bonus<1000;
