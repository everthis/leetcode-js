# Write your MySQL query statement below
SELECT name as warehouse_name, SUM(units*dimension) as volume FROM
(
    SELECT product_id, Width*Length*Height as dimension FROM Products
) a
JOIN Warehouse as b
ON a.product_id=b.product_id
GROUP BY name;
