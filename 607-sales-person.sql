# Write your MySQL query statement below
select name
from salesperson
where sales_id not in (select sales_id from
orders left join company
on orders.com_id = company.com_id
where company.name = 'red');
