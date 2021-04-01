/**

Given an array of meeting time intervals consisting of
start and end times [[s1,e1],[s2,e2],...] (si < ei),
find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
Example 2:

Input: [[7,10],[2,4]]
Output: 1
 
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
const minMeetingRooms = function(intervals) {
  const n = intervals.length
  const start = Array(n), end = Array(n)
  for(let i = 0; i < n; i++) {
    start[i] = intervals[i][0]
    end[i] = intervals[i][1]
  }
  start.sort((a, b) => a - b)
  end.sort((a, b) => a - b)

  let res = 0, endIdx = 0
  for(let i = 0; i < n; i++) {
    if(start[i] < end[endIdx]) res++
    else endIdx++
  }

  return res
}
