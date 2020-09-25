# Write your MySQL query statement below
SELECT customer_id, product_id, product_name
FROM (
    SELECT O.customer_id, O.product_id, P.product_name, 
    RANK() OVER (PARTITION BY customer_id ORDER BY COUNT(O.product_id) DESC) AS rnk
    FROM Orders O
    JOIN Products P
    ON O.product_id = P.product_id  
    GROUP BY customer_id, product_id
) temp
WHERE rnk = 1 
ORDER BY customer_id, product_id;
