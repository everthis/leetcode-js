/**
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = function(points) {
  const sorted = points.sort((a, b) => a[0] - b[0])
  let ans = 0
  let lastX = null
  for (let i = 0; i < sorted.length; i += 1) {
    if (lastX && sorted[i][0] <= lastX) {
      lastX = Math.min(sorted[i][1], lastX)
    } else {
      ans += 1
      lastX = sorted[i][1]
    }
  }
  return ans
}
