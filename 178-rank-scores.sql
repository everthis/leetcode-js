# Write your MySQL query statement below
Select sc.Score,
       (Select count(*)+1 from (select distinct (Score) from Scores)
        as uniqeScores where Score > sc.Score) as rank 
from Scores sc order by sc.Score desc;
