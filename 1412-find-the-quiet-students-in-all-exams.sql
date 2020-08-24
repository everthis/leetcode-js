# Write your MySQL query statement below
WITH cte AS(
    SELECT exam_id, exam.student_id, student_name, score, RANK() OVER(PARTITION BY exam_id ORDER BY score) rk1, RANK() OVER(PARTITION BY exam_id ORDER BY score DESC) rk2 
    FROM exam LEFT JOIN student
    ON exam.student_id = student.student_id
)

SELECT DISTINCT student_id, student_name
FROM cte
WHERE student_id NOT IN (SELECT student_id FROM cte WHERE rk1 = 1 or rk2 = 1)
ORDER BY student_id;
