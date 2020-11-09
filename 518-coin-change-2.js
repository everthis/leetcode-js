/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
function change(amount, coins) {
  const dp = Array.from(new Array(coins.length + 1), () =>
    new Array(amount + 1).fill(0)
  )
  dp[0][0] = 1
  for (let i = 1; i <= coins.length; i++) {
    dp[i][0] = 1
    for (let j = 1; j <= amount; j++) {
      dp[i][j] =
        dp[i - 1][j] + (j >= coins[i - 1] ? dp[i][j - coins[i - 1]] : 0)
    }
  }
  return dp[coins.length][amount]
}


// another

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = function (amount, coins) {
  const dp = Array(amount + 1).fill(0)
  dp[0] = 1
  for (let coin of coins) {
    for (let i = coin; i < amount + 1; i++) dp[i] += dp[i - coin]
  }
  return dp[amount]
}
