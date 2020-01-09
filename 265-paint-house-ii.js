/**
 * @param {number[][]} costs
 * @return {number}
 */
const minCostII = function(costs) {
  if (costs == null || costs.length === 0 || costs[0].length === 0) return 0
  let n = costs.length,
    k = costs[0].length
  if (k === 1) return n === 1 ? costs[0][0] : -1

  let prevMin = 0,
    prevMinInd = -1,
    prevSecMin = 0
  for (let i = 0; i < n; i++) {
    let min = Number.MAX_VALUE,
      minInd = -1,
      secMin = Number.MAX_VALUE
    for (let j = 0; j < k; j++) {
      const val = costs[i][j] + (j == prevMinInd ? prevSecMin : prevMin)
      if (val < min) {
        secMin = min
        min = val
        minInd = j
      } else if (val < secMin) {
        secMin = val
      }
    }
    prevMin = min
    prevMinInd = minInd
    prevSecMin = secMin
  }
  return prevMin
}
