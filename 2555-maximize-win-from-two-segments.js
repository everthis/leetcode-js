/**
 * @param {number[]} prizePositions
 * @param {number} k
 * @return {number}
 */
const maximizeWin = function(prizePositions, k) {
  let res = 0, j = 0
  const n = prizePositions.length, dp = new Array(n + 1).fill(0);
  for (let i = 0; i < n; ++i) {
    while (prizePositions[j] < prizePositions[i] - k) ++j;
    dp[i + 1] = Math.max(dp[i], i - j + 1);
    res = Math.max(res, i - j + 1 + dp[j]);
  }
  return res;
};
