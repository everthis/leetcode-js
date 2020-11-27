# Write your MySQL query statement below
SELECT 
user_id,
concat(upper(substr(name,1,1)),lower(substr(name,2))) as name
FROM Activity
ORDER BY 1 ASC;
