/**
 * @param {number[][]} positions
 * @return {number[]}
 */
class Interval {
  constructor(start, end, height) {
    this.start = start
    this.end = end
    this.height = height
  }
}
function fallingSquares(positions) {
  const intervals = []
  const res = []
  let h = 0
  for (let pos of positions) {
    let cur = new Interval(pos[0], pos[0] + pos[1] - 1, pos[1])
    h = Math.max(h, getHeight(intervals, cur))
    res.push(h)
  }
  return res
}
function getHeight(intervals, cur) {
  let preMaxHeight = 0
  for (let i of intervals) {
    if (i.end < cur.start) continue
    if (i.start > cur.end) continue
    preMaxHeight = Math.max(preMaxHeight, i.height)
  }
  cur.height += preMaxHeight
  intervals.push(cur)
  return cur.height
}
