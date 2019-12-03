/**

We are given a list schedule of employees, which represents the working time for each employee.

Each employee has a list of non-overlapping Intervals, and these intervals are in sorted order.

Return the list of finite intervals representing common, positive-length free time for all employees,
also in sorted order.

(Even though we are representing Intervals in the form [x, y], the objects inside are Intervals,
not lists or arrays. For example, schedule[0][0].start = 1, schedule[0][0].end = 2,
and schedule[0][0][0] is not defined).  Also, we wouldn't include intervals like [5, 5] in our answer,
as they have zero length.

Example 1:

Input: schedule = [[[1,2],[5,6]],[[1,3]],[[4,10]]]
Output: [[3,4]]
Explanation: There are a total of three employees, and all common
free time intervals would be [-inf, 1], [3, 4], [10, inf].
We discard any intervals that contain inf as they aren't finite.
Example 2:

Input: schedule = [[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]
Output: [[5,6],[7,9]]

Constraints:

1 <= schedule.length , schedule[i].length <= 50
0 <= schedule[i].start < schedule[i].end <= 10^8

*/


/**
 * // Definition for an Interval.
 * function Interval(start, end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */
/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */
const employeeFreeTime = function(schedule) {
  schedule = [].concat(...schedule)
  schedule.sort((a, b) => a.start - b.start)
  const intervals = [schedule[0]]
  for (let i = 1; i < schedule.length; i++) {
    const prev = intervals.pop()
    const current = schedule[i]
    if (prev.end >= current.start) {
      const start = Math.min(prev.start, current.start)
      const end = Math.max(prev.end, current.end)
      intervals.push(new Interval(start, end))
    } else {
      intervals.push(prev)
      intervals.push(current)
    }
  }
  const result = []
  for (let i = 1; i < intervals.length; i++) {
    const prev = intervals[i - 1]
    const current = intervals[i]
    result.push(new Interval(prev.end, current.start))
  }
  return result
}

// another

const employeeFreeTime = function(schedule) {
  const intervals = []
  schedule.forEach(s => s.forEach(t => intervals.push(t)))
  intervals.sort((a, b) =>
    a.start !== b.start ? a.start - b.start : a.end - b.end
  )
  let i1 = intervals[0]
  const res = []
  for (let interval of intervals.slice(1)) {
    let i2 = interval
    if (i1.end >= i2.start) {
      i1.end = Math.max(i1.end, i2.end)
    } else {
      res.push(new Interval(i1.end, i2.start))
      i1 = i2
    }
  }
  return res
}
