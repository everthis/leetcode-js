select Email
from
    (
  select Email, count(Email) as num
    from Person
    group by Email
) as statistic
where num > 1
;