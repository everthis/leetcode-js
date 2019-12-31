# Write your MySQL query statement below
select 
round(100*sum(case when b.min_order_date = b.min_delivery_date then 1 else 0 end)/count(*), 2)
as immediate_percentage
from (
  select min(order_date) as min_order_date, min(customer_pref_delivery_date) as min_delivery_date
  from delivery
  group by customer_id
) b;
