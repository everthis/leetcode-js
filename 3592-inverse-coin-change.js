/**
 * @param {number[]} numWays
 * @return {number[]}
 */
var findCoins = function (numWays) {
  const n = numWays.length
  const dp = new Array(n + 1).fill(0)
  dp[0] = 1
  const res = []

  for (let coin = 1; coin <= n; coin++) {
    const temp = dp.slice()
    let valid = true
    let changed = false

    for (let i = coin; i <= n; i++) {
      temp[i] += temp[i - coin]

      if (temp[i] > numWays[i - 1]) {
        valid = false
        break
      }

      if (temp[i] !== dp[i]) {
        changed = true
      }
    }

    if (valid && changed) {
      res.push(coin)
      for (let j = 0; j <= n; j++) {
        dp[j] = temp[j]
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    if (dp[i] !== numWays[i - 1]) {
      return []
    }
  }

  return res
}
