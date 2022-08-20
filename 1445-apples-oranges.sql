# Write your MySQL query statement below
select sale_date, sum(case when fruit='apples' then sold_num else -sold_num end) as diff
from sales
group by sale_date;
