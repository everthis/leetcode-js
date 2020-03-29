# Write your MySQL query statement below
select question_id as survey_log
from (
  select question_id, count(answer_id)/count(*) as count
  from survey_log group by question_id
  order by count desc 
  limit 1
) as p;
