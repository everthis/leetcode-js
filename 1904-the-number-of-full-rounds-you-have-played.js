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
