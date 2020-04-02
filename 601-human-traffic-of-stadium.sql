# Write your MySQL query statement below
select distinct s1.* from stadium as s1, stadium as s2, stadium as s3
where
    ((s1.id + 1 = s2.id and s1.id + 2 = s3.id)
    or (s1.id - 1 = s2.id and s1.id + 1 = s3.id)
    or (s1.id - 2 = s2.id and s1.id - 1 = s3.id))
    and s1.people >= 100 and s2.people >= 100 and s3.people >= 100
order by s1.id;
