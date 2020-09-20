/**
 * @param {number[][]} cost
 * @return {number}
 */
const connectTwoGroups = function (cost) {
  const min = Array(cost[0].length).fill(Infinity)
  for (let j = 0; j < min.length; j++) {
    for (let i = 0; i < cost.length; i++) {
      min[j] = Math.min(min[j], cost[i][j])
    }
  }
  const dp = Array.from({ length: 13 }, () => Array(4096).fill(-1))
  return dfs(cost, min, 0, 0, dp)
}

function dfs(cost, min, i, mask, dp) {
  if (dp[i][mask] !== -1) return dp[i][mask]
  let res = i >= cost.length ? 0 : Infinity
  if (i >= cost.length) {
    for (let j = 0; j < cost[0].length; j++) {
      if ((mask & (1 << j)) === 0) res += min[j]
    }
  } else {
    for (let j = 0; j < cost[0].length; j++) {
      res = Math.min(
        res,
        cost[i][j] + dfs(cost, min, i + 1, mask | (1 << j), dp)
      )
    }
  }
  dp[i][mask] = res
  return res
}
