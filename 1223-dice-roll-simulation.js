/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 */
const dieSimulator = function(n, rollMax) {
  const mod = 10 ** 9 + 7
  const faces = rollMax.length
  const dp = Array.from({ length: n + 1 }, () => new Array(faces + 1).fill(0))
  dp[0][faces] = 1
  for(let j = 0; j < faces; j++) {
    dp[1][j] = 1
  }
  dp[1][faces] = faces
  for(let i = 2; i < n + 1; i++) {
    for(let j = 0; j < faces; j++) {
      for(let k = 1; k < rollMax[j] + 1; k++) {
        if(i - k < 0) break
        dp[i][j] += dp[i - k][faces] - dp[i - k][j]
        dp[i][j] %= mod
      }
    }
    dp[i][faces] = dp[i].reduce((ac, e) => ac + e, 0)
  }
  return dp[n][faces] % mod
};
