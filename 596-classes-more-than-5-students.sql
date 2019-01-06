# Write your MySQL query statement below
select class from (select class ,count(distinct student) as num from courses group by class)  as temp_table where num>=5
