![alt text](https://github.com/everthis/leetcode-js/blob/master/images/meeting-room-ii-0.jpg "meeting-room-ii")
![alt text](https://github.com/everthis/leetcode-js/blob/master/images/meeting-room-ii-1.jpg "meeting-room-ii")

```javascript
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
  let endsIdx = 0
  for (let i = 0; i < len; i++) {
    if (starts[i] < ends[endsIdx]) rooms++
    else endsIdx++
  }
  return rooms
}
```
