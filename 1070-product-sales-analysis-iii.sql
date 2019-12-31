# Write your MySQL query statement below
select sub.product_id, 
       sub.first_year, 
       S.quantity,
       S.price
from (select product_id, 
      min(year) as first_year
      from Sales
      group by product_id) sub, 
      Sales S
where S.product_id = sub.product_id
and S.year = sub.first_year
