# Write your MySQL query statement below
SELECT
    sp.salesperson_id,
    name,
    SUM(IF(price IS NULL, 0, price)) AS total
FROM Salesperson sp
LEFT JOIN Customer c ON sp.salesperson_id = c.salesperson_id
LEFT JOIN Sales s ON c.customer_id = s.customer_id
GROUP BY sp.salesperson_id, name
