# Write your MySQL query statement below
SELECT Name
FROM Candidate c
INNER JOIN (SELECT CandidateId
    FROM Vote
    GROUP BY CandidateId
    ORDER BY COUNT(CandidateId)  DESC
    LIMIT 0,1) v
ON c.id = v.CandidateId;
