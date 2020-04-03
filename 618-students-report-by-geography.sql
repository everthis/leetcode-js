# Write your MySQL query statement below
SELECT MAX(America) AS America, MAX(Asia) as Asia, MAX(Europe) AS Europe
FROM (
  SELECT 
    CASE WHEN continent = 'America' THEN @r1 := @r1 + 1
         WHEN continent = 'Asia'    THEN @r2 := @r2 + 1
         WHEN continent = 'Europe'  THEN @r3 := @r3 + 1 END row_id,
    CASE WHEN continent = 'America' THEN name END America,
    CASE WHEN continent = 'Asia'    THEN name END Asia,
    CASE WHEN continent = 'Europe'  THEN name END Europe
  FROM student, (SELECT @r1 := 0, @r2 := 0, @r3 := 0) AS row_id
  ORDER BY name
) t
GROUP BY row_id;
