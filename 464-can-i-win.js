/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
const canIWin = function(maxChoosableInteger, desiredTotal) {
  if (desiredTotal <= 0) return true
  if ((maxChoosableInteger * (1 + maxChoosableInteger)) / 2 < desiredTotal)
    return false
  const dp = new Array(1 << maxChoosableInteger).fill(0)
  return dfs(dp, 0, maxChoosableInteger, desiredTotal)

  function dfs(dp, chs, max, target) {
    if (target <= 0) return false
    if (dp[chs] != 0) return dp[chs] === 1
    let win = false
    for (let i = 0; i < max; i++) {
      if ((chs & (1 << i)) === 0) {
        //not used
        win = win || !dfs(dp, chs ^ (1 << i), max, target - i - 1)
      }
    }
    dp[chs] = win ? 1 : -1
    return win
  }
}
