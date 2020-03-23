# Write your MySQL query statement below
select 
round((select count(distinct a.player_id) from Activity a
inner join 
(select player_id, min(event_date) as first_logged 
    from Activity 
    group by player_id) b on datediff(a.event_date, b.first_logged)=1
    and a.player_id = b.player_id)
    /
    (select count(distinct player_id) from Activity),2) as fraction;
