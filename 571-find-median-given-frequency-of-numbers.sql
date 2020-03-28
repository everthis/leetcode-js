# Write your MySQL query statement below
SELECT AVG(Number) AS median
FROM 
    (SELECT * FROM Numbers ORDER BY Number) a, 
    (SELECT @i:=0) init
WHERE 
    Frequency >= ABS(@i+(@i:=@i+Frequency) - (SELECT SUM(Frequency) FROM Numbers)); 
