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


// another

/**
 * @param {number[][]} intervals
 * @return {number}
 */
const minMeetingRooms = function(intervals) {
  let res = 0
  const sArr = [], eArr = [], n = intervals.length
  for(const [s, e] of intervals) {
    sArr.push(s)
    eArr.push(e)
  }
  sArr.sort((a, b) => a - b)
  eArr.sort((a, b) => a - b)
  for(let i = 0, j = 0; i < n && j < n;) {
    const s = sArr[i], e = eArr[j]
    if(s < e) {
      res++
      i++
    } else {
      j++
      i++
    }
  }
  
  return res
}

// another

/**
 * @param {number[][]} intervals
 * @return {number}
 */
const minMeetingRooms = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1])
  const n = intervals.length
  const pq = new MinPriorityQueue()
  let res = 0
  for(const [s, e] of intervals) {
    while(!pq.isEmpty() && s >= pq.front().element) {
       pq.dequeue()
    }
    pq.enqueue(e)
    res = Math.max(res, pq.size())
  }
  
  return res
}

// another

/**
 * @param {number[][]} intervals
 * @return {number}
 */
const minMeetingRooms = function(intervals) {
  const hash = {}
  for(const [s, e] of intervals) {
    hash[s] = (hash[s] || 0) + 1
    hash[e] = (hash[e] || 0) - 1
  }
  let res = 0, cur = 0
  const keys = Object.keys(hash).map(e => +e)
  keys.sort((a, b) => a - b)
  for(const k of keys) {
    cur += hash[k]
    res = Math.max(res, cur)
  }
  return res
};
