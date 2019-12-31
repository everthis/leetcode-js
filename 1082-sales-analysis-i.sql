# Write your MySQL query statement below
select a.seller_id from
(select seller_id, sum(price) as p from Sales
group by seller_id) a
join 
(select  sum(price) p 
from Sales
group by seller_id
order by 1 desc
 limit 1
 ) b
 on a.p = b.p 
