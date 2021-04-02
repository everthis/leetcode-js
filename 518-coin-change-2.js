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

// another

// another

const change = function(amount,coins) {
  const n = coins.length
  const dp = Array.from({ length: n + 1 }, () => Array(amount + 1))
  dp[0][0] = 1
  for(let i = 0; i < n; i++) dp[i][0] = 1
  helper(0, amount)
  return dp[0][amount] === undefined ? 0 : dp[0][amount]
  
  function helper(i, rem) {
    if(dp[i][rem] != null) return dp[i][rem]
    if(rem < 0) return 0
    if(rem === 0) return 1
    if(i >= coins.length) return 0
    let res = 0
    
    res += helper(i, rem - coins[i])
    res += helper(i + 1, rem)
    
    dp[i][rem] = res
      
    return res
  } 
}
