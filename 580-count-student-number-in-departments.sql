# Write your MySQL query statement below
SELECT dept_name, IFNULL(COUNT(student_id),0) as student_number 
FROM department 
LEFT JOIN student
USING (dept_id)
GROUP BY dept_name
ORDER BY student_number DESC, dept_name;
