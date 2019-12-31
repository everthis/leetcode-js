# Write your MySQL query statement below
select seller_id from Sales
group by seller_id
having sum(price) =
(select sum(price) as sm
from Sales
group by seller_id
order by sm desc
limit 1);
