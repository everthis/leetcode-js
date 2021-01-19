# Write your MySQL query statement below
SELECT sa.student_name AS member_a
    , sb.student_name AS member_b
    , sc.student_name AS member_c
FROM schoola sa CROSS JOIN schoolb sb 
    CROSS JOIN schoolc sc
        WHERE sa.student_name != sb.student_name 
            AND sa.student_name != sc.student_name
            AND sb.student_name != sc.student_name
            AND sa.student_id != sc.student_id
            AND sb.student_id != sc.student_id
            AND sa.student_id != sb.student_id;
