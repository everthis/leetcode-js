# Write your MySQL query statement below
select group_id, player_id from (
	select p.group_id, ps.player_id, sum(ps.score) as score from Players p,
	    (select first_player as player_id, first_score as score from Matches
	    union all
	    select second_player, second_score from Matches) ps
	where p.player_id = ps.player_id
	group by ps.player_id order by group_id, score desc, player_id) top_scores
group by group_id;
