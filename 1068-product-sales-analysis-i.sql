# Write your MySQL query statement below
SELECT p.product_name, s.year, s.price
FROM
    (SELECT DISTINCT product_id, year, price
     FROM Sales) AS s
INNER JOIN Product AS p
WHERE s.product_id = p.product_id
