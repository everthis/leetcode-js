/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function(coins, amount) {
  const n = coins.length
  const dp = Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for(const e of coins) dp[e] = 1
  for(let i = 1; i <= amount; i++) {
    for(const e of coins) {
      if(i > e) dp[i] = Math.min(dp[i], dp[i - e] + 1)
    }
  }
  // console.log(dp)
  return dp[amount] !== Infinity ? dp[amount] : -1
};

// another

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


// another

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
  const n = coins.length
  const dp = Array.from({ length: n }, () =>
    Array(amount + 1).fill(Infinity)
  )

  for (let i = 0; i < n; i++) {
    dp[i][0] = 0
    for (let j = 1; j <= amount; j++) {
      if(i > 0) dp[i][j] = dp[i - 1][j]
      if (j >= coins[i]) {
        dp[i][j] = Math.min(dp[i][j], dp[i][j - coins[i]] + 1)
      }
    }
  }
  return dp[n - 1][amount] === Infinity ? -1 : dp[n - 1][amount]
}
