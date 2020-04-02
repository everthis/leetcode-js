# Write your MySQL query statement below
select distinct
  t1.id, 
  case when t1.p_id is NULL then 'Root'
    when t2.id is NULL then 'Leaf'
    else 'Inner' 
  end as Type
from tree t1 left join tree t2 on t1.id = t2.p_id;
