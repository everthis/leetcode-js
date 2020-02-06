/**
 * @param {number[][]} points
 * @return {boolean}
 */
const isReflected = function(points) {
  let max = -Infinity,
    min = +Infinity,
    sum = 0,
    length = points.length
  const set = new Set()
  for (let i = 0; i < length; i++) {
    max = Math.max(max, points[i][0])
    min = Math.min(min, points[i][0])
    let curStr = points[i][0] + 'a' + points[i][1]
    set.add(curStr)
  }
  sum = max + min
  for (let j = 0; j < length; j++) {
    let cur = sum - points[j][0] + 'a' + points[j][1]
    if (!set.has(cur)) {
      return false
    }
  }
  return true
}
