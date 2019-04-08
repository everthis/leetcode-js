/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function(coins, amount) {
  const dp = new Array(amount + 1).fill(amount + 1)
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (coin <= i) dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount]
}
