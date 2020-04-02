# Write your MySQL query statement below
SELECT 
    followee AS follower, 
    COUNT(DISTINCT follower) AS num
FROM follow
WHERE followee IN (SELECT follower FROM follow)
GROUP BY followee
ORDER BY followee;

# another

select distinct follower, num
from follow, 
(select followee, count(distinct follower) as num from follow 
group by followee) as t
where follower = t.followee
order by follower;
