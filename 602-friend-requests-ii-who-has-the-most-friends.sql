# Write your MySQL query statement below
select id1 as id, count(id2) as num
from
(select requester_id as id1, accepter_id as id2 
from request_accepted
union
select accepter_id as id1, requester_id as id2 
from request_accepted) tmp1
group by id1 
order by num desc
limit 1;
