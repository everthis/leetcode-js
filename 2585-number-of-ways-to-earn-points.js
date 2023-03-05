/**
 * @param {number} target
 * @param {number[][]} types
 * @return {number}
 */
const waysToReachTarget = function(target, types) {
  const n = types.length
  const dp = Array.from({ length: n + 1 }, () => Array(target + 1).fill(0))
  const mod = 1e9 + 7
  let res = 0
  dp[0][0] = 1
  for(let i = 1; i <= n; i++) {
    const [cnt, mark] = types[i - 1]
    for(let j = 0, tmp = 0; j <= cnt; j++) {
      const tmp = mark * j
      for(let k = tmp; k <= target; k++) {
        dp[i][k] = (dp[i][k] + dp[i - 1][k - tmp]) % mod 
      }
    }
  }
  
  return dp[n][target] % mod
};
