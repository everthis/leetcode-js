# Write your MySQL query statement below
SELECT 
    p.spend_date,
    p.platform,
    IFNULL(SUM(amount), 0) total_amount,
    COUNT(user_id) total_users
FROM 
(
    SELECT DISTINCT(spend_date), 'desktop' platform FROM Spending
    UNION
    SELECT DISTINCT(spend_date), 'mobile' platform FROM Spending
    UNION
    SELECT DISTINCT(spend_date), 'both' platform FROM Spending
) p 
LEFT JOIN (
    SELECT
        spend_date,
        user_id,
        IF(mobile_amount > 0, IF(desktop_amount > 0, 'both', 'mobile'), 'desktop') platform,
        (mobile_amount + desktop_amount) amount
    FROM (
        SELECT
          spend_date,
          user_id,
          SUM(CASE platform WHEN 'mobile' THEN amount ELSE 0 END) mobile_amount,
          SUM(CASE platform WHEN 'desktop' THEN amount ELSE 0 END) desktop_amount
        FROM Spending
        GROUP BY spend_date, user_id
    ) o
) t
ON p.platform=t.platform AND p.spend_date=t.spend_date
GROUP BY spend_date, platform;
