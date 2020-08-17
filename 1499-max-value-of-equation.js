/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
const findMaxValueOfEquation = function (points, k) {
  let res = -Number.MAX_VALUE
  const deque = []
  for (let i = 0; i < points.length; i++) {
    const x = points[i][0]
    const y = points[i][1]
    while (deque.length != 0 && x - deque[0][1] > k) {
      deque.shift()
    }
    if (deque.length != 0) {
      res = Math.max(res, deque[0][0] + x + y)
    }
    while (deque.length != 0 && deque[deque.length - 1][0] <= y - x) {
      deque.pop()
    }
    deque.push([y - x, x])
  }
  return res
}
