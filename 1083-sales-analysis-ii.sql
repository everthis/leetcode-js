# Write your MySQL query statement below
select distinct buyer_id from sales s
join product p
on p.product_id = s.product_id 
where buyer_id not in (
  select distinct buyer_id from sales s
  join product p on 
  s.product_id = p.product_id 
  where product_name = 'iPhone'
) and product_name='S8';
