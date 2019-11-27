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
  const len = intervals.length
  const starts = new Array(len)
  const ends = new Array(len)
  for (let i = 0; i < len; i++) {
    starts[i] = intervals[i][0]
    ends[i] = intervals[i][1]
  }
  starts.sort((a, b) => a - b)
  ends.sort((a, b) => a - b)
  let rooms = 0
  let endsItr = 0
  for (let i = 0; i < len; i++) {
    if (starts[i] < ends[endsItr]) rooms++
    else endsItr++
  }
  return rooms
}
