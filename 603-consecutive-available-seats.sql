# Write your MySQL query statement below
select distinct a.seat_id 
from cinema a
left join cinema b on a.seat_id = b.seat_id - 1 or a.seat_id = b.seat_id + 1
where a.free = 1 and b.free = 1;
