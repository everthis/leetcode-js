# Write your MySQL query statement below
select question_id as survey_log
from survey_log
group by question_id
order by count(answer_id) desc
limit 1;
