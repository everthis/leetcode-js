# Write your MySQL query statement below
SELECT u.name, SUM(amount) as balance
FROM Transactions
JOIN Users u
USING (account)
GROUP BY account
HAVING balance>10000;
