# Write your MySQL query statement below
SELECT CAST(b.transaction_count AS UNSIGNED) AS transactions_count, IFNULL(c.visits_count, 0) AS visits_count
FROM 
(SELECT (@cnt1 := @cnt1+1) AS transaction_count
        FROM Transactions 
        CROSS JOIN (SELECT @cnt1 := -1) AS tmp
        WHERE @cnt1 + 1 <= (SELECT COUNT(*)
                                    FROM Transactions
                                    GROUP BY user_id, transaction_date
                                    ORDER BY COUNT(*) DESC
                                    LIMIT 1)
 UNION SELECT 0
        ) AS b
LEFT OUTER JOIN
(SELECT a.transaction_count AS transaction_count, COUNT(a.user_id) AS visits_count
FROM (SELECT v.user_id AS user_id, v.visit_date AS visit_date, SUM(IF(t.transaction_date IS NULL, 0, 1)) AS transaction_count
FROM Visits AS v
LEFT OUTER JOIN Transactions AS t
ON v.user_id = t.user_id AND v.visit_date = t.transaction_date
GROUP BY v.user_id, v.visit_date) AS a
GROUP BY a.transaction_count
ORDER BY a.transaction_count) AS c
ON b.transaction_count = c.transaction_count;
