# Write your MySQL query statement below
select order_id from OrdersDetails
group by order_id
having max(quantity) > (
  select max(avg_quantity) from
  (select order_id, sum(quantity) / count(product_id) as avg_quantity 
    from OrdersDetails
    group by order_id
  ) t
);
