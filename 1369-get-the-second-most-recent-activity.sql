# Write your MySQL query statement below
SELECT * 
FROM UserActivity 
GROUP BY username 
HAVING COUNT(*) = 1

UNION ALL

SELECT u1.*
FROM UserActivity u1 
LEFT JOIN UserActivity u2 
    ON u1.username = u2.username AND u1.endDate < u2.endDate
GROUP BY u1.username, u1.endDate
HAVING COUNT(u2.endDate) = 1;
