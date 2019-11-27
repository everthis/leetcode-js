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
  for (let i = 0, l = starts.length; i < l; i++) {
    if (starts[i] < ends[endsItr]) rooms++
    else endsItr++
  }
  return rooms
}
