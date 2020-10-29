/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
const minCost = function(n, cuts) {
  const x = 100 + 2
  const dp = Array.from({ length: x }, () => Array(x).fill(0))
  cuts.push(0, n)
  cuts.sort((a, b) => a - b)
  const res = dfs(0, cuts.length - 1)
  return res
  function dfs(i, j) {
    if(j - i <= 1) return 0
    if(!dp[i][j]) {
      dp[i][j] = Number.MAX_VALUE
      for(let k = i + 1; k < j; k++) {
        dp[i][j] = Math.min(dp[i][j], cuts[j] - cuts[i] + dfs(i, k) + dfs(k, j))
      }
    }
    return dp[i][j]
  }
};

// another

/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
const minCost = function (n, cuts) {
  cuts.push(0, n)
  cuts.sort((a, b) => a - b)
  const N = cuts.length,
    dp = Array.from({ length: N }, () => Array(N).fill(0))
  for (let l = 2; l < N; l++) {
    for (let i = 0; i + l < N; i++) {
      const j = i + l
      dp[i][j] = Infinity
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.min(dp[i][j], cuts[j] - cuts[i] + dp[i][k] + dp[k][j])
      }
    }
  }
  return dp[0][N - 1]
}
