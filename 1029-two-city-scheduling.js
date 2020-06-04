/**
 * @param {number[][]} costs
 * @return {number}
 */
const twoCitySchedCost = function(costs) {
  const N = costs.length / 2
  const dp = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0))
  for (let i = 1; i <= N; i++) {
    dp[i][0] = dp[i - 1][0] + costs[i - 1][0]
  }
  for (let j = 1; j <= N; j++) {
    dp[0][j] = dp[0][j - 1] + costs[j - 1][1]
  }
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + costs[i + j - 1][0],
        dp[i][j - 1] + costs[i + j - 1][1]
      )
    }
  }
  return dp[N][N]
}

// another

/**
 * @param {number[][]} costs
 * @return {number}
 */
const twoCitySchedCost = function(costs) {
  const N = costs.length
  let res = 0
  const refund = []
  for(let i = 0; i < N; i++) {
    refund[i] = costs[i][1] - costs[i][0]
    res += costs[i][0]
  }
  refund.sort((a, b) => a - b)
  for(let i = 0; i < N / 2; i++) {
    res += refund[i]
  }
  return res
};

// another

/**
 * @param {number[][]} costs
 * @return {number}
 */
const twoCitySchedCost = function(costs) {
  const len = costs.length
  if(len === 0) return 0
  const N = len / 2
  costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]))
  let res = 0
  for(let i = 0; i < costs.length; i++) {
    if(i < N) {
      res += costs[i][0]
    } else {
      res += costs[i][1]
    }
  }
  return res
};
