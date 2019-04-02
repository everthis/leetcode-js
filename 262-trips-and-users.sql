# Write your MySQL query statement below
SELECT Request_at as Day, 
       ROUND(SUM(CASE WHEN Status LIKE 'cancelled%' THEN 1 ELSE 0 END) / COUNT(*), 2) as "Cancellation Rate"
FROM(
    SELECT * FROM Trips t
    WHERE
        t.Client_Id not in (select Users_Id from Users where Banned = 'Yes') AND
        t.Driver_Id not in (select Users_Id from Users where Banned = 'Yes') AND
        t.Request_at between '2013-10-01' and '2013-10-03'
    ) AS newT
GROUP BY Request_at
