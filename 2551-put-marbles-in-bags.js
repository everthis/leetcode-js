/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
const putMarbles = function (weights, k) {
  if (weights.length === k) return 0
  let getEdgeWeights = weights.map((n, i, a) =>
    i < a.length - 1 ? n + a[i + 1] : 0
  )
  getEdgeWeights = getEdgeWeights.slice(0, weights.length - 1)
  getEdgeWeights = getEdgeWeights.sort((a, b) => a - b)
  let maxScores = getEdgeWeights
    .slice(getEdgeWeights.length - k + 1)
    .reduce((a, b) => a + b, 0)
  let minScores = getEdgeWeights.slice(0, k - 1).reduce((a, b) => a + b, 0)
  return maxScores - minScores
}
