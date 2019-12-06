/**
 * @param {number[][]} costs
 * @return {number}
 */
const minCost = function(costs) {
  if (!costs || costs.length < 1) return 0
  const n = costs.length
  for (let i = 1; i < n; i++) {
    const c = costs[i],
      cPrev = costs[i - 1]
    c[0] += Math.min(cPrev[1], cPrev[2])
    c[1] += Math.min(cPrev[0], cPrev[2])
    c[2] += Math.min(cPrev[0], cPrev[1])
  }
  const cLast = costs[n - 1]
  return Math.min(cLast[0], cLast[1], cLast[2])
}
