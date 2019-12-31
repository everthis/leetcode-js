# Write your MySQL query statement below
SELECT project_id
FROM project
GROUP BY project_id
HAVING COUNT(*) = (
    SELECT COUNT(*) cnt
    FROM project
    GROUP BY project_id 
    ORDER BY cnt DESC 
    LIMIT 1
);
