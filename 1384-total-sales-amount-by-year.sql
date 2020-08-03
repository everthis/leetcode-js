# Write your MySQL query statement below
SELECT
    b.product_id,
    a.product_name,
    a.yr AS report_year,
    CASE 
        WHEN YEAR(b.period_start)=YEAR(b.period_end) AND a.yr=YEAR(b.period_start) THEN DATEDIFF(b.period_end,b.period_start)+1
        WHEN a.yr=YEAR(b.period_start) THEN DATEDIFF(DATE_FORMAT(b.period_start,'%Y-12-31'),b.period_start)+1
        WHEN a.yr=YEAR(b.period_end) THEN DAYOFYEAR(b.period_end) 
        WHEN a.yr>YEAR(b.period_start) AND a.yr<YEAR(b.period_end) THEN 365
        ELSE 0
    END * average_daily_sales AS total_amount
FROM
    (SELECT product_id,product_name,'2018' AS yr FROM Product
    UNION
    SELECT product_id,product_name,'2019' AS yr FROM Product
    UNION
    SELECT product_id,product_name,'2020' AS yr FROM Product) a
    JOIN 
    Sales b
    ON a.product_id=b.product_id  
HAVING total_amount > 0
ORDER BY b.product_id,a.yr;
