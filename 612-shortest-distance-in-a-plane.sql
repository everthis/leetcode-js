# Write your MySQL query statement below
select round(sqrt(min(pow(a.x-b.x,2) + pow(a.y-b.y,2))), 2) shortest
from point_2d a, point_2d b
where (a.x,a.y) != (b.x,b.y);
