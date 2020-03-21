# Write your MySQL query statement below
select player_id, event_date, sum(games_played) as games_played_so_far
from (select a.player_id, a.event_date, b.games_played
from (
select player_id, event_date
from activity
group by player_id, event_date) a
join activity b
on a.player_id = b.player_id and a.event_date >=b.event_date) as tb
group by player_id, event_date;
