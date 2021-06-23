/**
 * @param {string} startTime
 * @param {string} finishTime
 * @return {number}
 */
const numberOfRounds = function(startTime, finishTime) {
  let start = 60 * parseInt(startTime.slice(0, 2)) + parseInt(startTime.slice(3))
  let finish = 60 * parseInt(finishTime.slice(0, 2)) + parseInt(finishTime.slice(3));
  if (start > finish) finish += 60 * 24; // If `finishTime` is earlier than `startTime`, add 24 hours to `finishTime`.
  return Math.max(0, Math.floor(finish / 15) - Math.ceil(start / 15)); // floor(finish / 15) - ceil(start / 15)
};

// another

/**
 * @param {string} startTime
 * @param {string} finishTime
 * @return {number}
 */
const numberOfRounds = function(startTime, finishTime) {
  const { ceil, floor } = Math
  const start = new Node(startTime), finish = new Node(finishTime)
  if(finish.compare(start)) finish.hour += 24
  let cnt = 0
  if(start.hour === finish.hour) {
    const r = floor(finish.minute / 15)
    const l = ceil(start.minute / 15)
    if(l >= r) return 0
    return r - l
  }
  cnt += 4 - ceil(start.minute / 15) + floor(finish.minute / 15)
  start.hour++
  cnt += (finish.hour - start.hour) * 4
  return cnt
};

class Node {
  constructor(str) {
    this.hour = +str.slice(0, 2)
    this.minute = +str.slice(3)
  }
  compare(node) {
    return this.hour === node.hour ? this.minute < node.minute : this.hour < node.hour
  }
}
