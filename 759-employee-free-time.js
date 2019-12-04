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
  const n = schedule.length
  const time = mergeSort(schedule, 0, n - 1)
  const free = []
  let end = time[0].end
  for(let i = 1; i < time.length; i++) {
    if(time[i].start > end) {
      free.push(new Interval(end, time[i].start))
    }
    end = Math.max(end, time[i].end)
  }
  return free
}

function mergeSort(schedule, l, r) {
  if(l === r) return schedule[l]
  const mid = l + ((r - l) >> 1)
  const left = mergeSort(schedule, l, mid)
  const right = mergeSort(schedule, mid + 1, r)
  return merge(left, right)
}

function merge(A, B) {
  const res = []
  const m = A.length, n = B.length
  let i = 0, j = 0
  while(i < m || j < n) {
    if(i === m) {
      res.push(B[j++])
    } else if(j === n) {
      res.push(A[i++])
    } else if(A[i].start < B[j].start) {
      res.push(A[i++])
    } else {
      res.push(B[j++])
    }
  }
  return res
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
