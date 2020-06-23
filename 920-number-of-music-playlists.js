/**
 * @param {number} N
 * @param {number} L
 * @param {number} K
 * @return {number}
 */
const numMusicPlaylists = function (N, L, K) {
  const mod = 10 ** 9 + 7
  const dp = Array.from({ length: L + 1 }, () => Array(N + 1).fill(0))
  dp[0][0] = 1
  for (let i = 1; i <= L; i++) {
    for (let j = 1; j <= N; j++) {
      dp[i][j] = (dp[i - 1][j - 1] * (N - (j - 1))) % mod
      if (j > K) {
        dp[i][j] = (dp[i][j] + ((dp[i - 1][j] * (j - K)) % mod)) % mod
      }
    }
  }
  return dp[L][N]
}
