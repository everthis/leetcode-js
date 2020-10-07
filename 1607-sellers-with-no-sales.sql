# Write your MySQL query statement below
SELECT DISTINCT seller_name
FROM seller s
WHERE seller_id NOT IN (
    SELECT DISTINCT seller_id 
    FROM orders
    WHERE YEAR(sale_date) = 2020
)
ORDER BY 1;
