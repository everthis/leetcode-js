/**
 * @param {number[]} stones
 * @param {number} K
 * @return {number}
 */
const mergeStones = function(stones, K) {
  const KMO = K - 1
  const N = stones.length
  if ((N - 1) % KMO !== 0) return -1
  const sum = [0]
  const dp = stones.map(s => stones.map(s1 => 0))
  stones.forEach(s => {
    sum.push(sum[sum.length - 1] + s)
  })
  for (let e = KMO; e < N; e++) {
    for (let b = e - KMO; b >= 0; b--) {
      for (let split = e - 1; split >= b; split -= KMO) {
        let cost = dp[b][split] + dp[split + 1][e]
        dp[b][e] = dp[b][e] === 0 ? cost : Math.min(dp[b][e], cost)
      }
      if ((e - b) % KMO === 0) {
        dp[b][e] += sum[e + 1] - sum[b]
      }
    }
  }
  return dp[0][N - 1]
}
