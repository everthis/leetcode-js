/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
const minCost = function (houses, cost, m, n, target) {
  const dp = Array(m)
    .fill(null)
    .map(() =>
      Array(target)
        .fill(null)
        .map(() => Array(n + 1).fill(0))
    )
  function dfs(i, t, p) {
    if (i === m && t === 0) {
      return 0
    } else if (t < 0 || m - i < t || (i === m && t > 0)) {
      return Infinity
    } else if (p > -1 && dp[i][t][p]) {
      return dp[i][t][p]
    } else {
      let res = Infinity
      if (houses[i]) {
        const tmp = houses[i] !== p ? 1 : 0
        res = dfs(i + 1, t - tmp, houses[i])
      } else {
        for (let k = 1; k <= n; k++) {
          const tmp = k !== p ? 1 : 0
          res = Math.min(res, cost[i][k - 1] + dfs(i + 1, t - tmp, k))
        }
      }
      if (p > -1) {
        dp[i][t][p] = res
      }
      return res
    }
  }
  const answer = dfs(0, target, -1)
  return answer === Infinity ? -1 : answer
}
