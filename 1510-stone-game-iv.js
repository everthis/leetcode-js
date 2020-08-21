/**
 * @param {number} n
 * @return {boolean}
 */
const winnerSquareGame = function(n) {
  const dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; ++i) {
    for (let k = 1; k * k <= i; ++k) {
      if (!dp[i - k * k]) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
};
