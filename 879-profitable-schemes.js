/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
const profitableSchemes = function (n, minProfit, group, profit) {
  const m = group.length
  const dp = buildMatrix([m + 1, n + 1, minProfit + 1], 0)
  const mod = 1e9 + 7
  group.unshift(0)
  profit.unshift(0)
  dp[0][0][0] = 1
  console.log(group, profit)
  for (let i = 0; i < m; i++) {
    const g = group[i + 1],
      p = profit[i + 1]
    for (let j = 0; j <= n; j++) {
      for (let k = 0; k <= minProfit; k++) {
        dp[i + 1][j][k] += dp[i][j][k]
        dp[i + 1][j][k] = dp[i + 1][j][k] % mod
        if (j + g <= n) {
          const pp = Math.min(minProfit, k + p)
          dp[i + 1][j + g][pp] += dp[i][j][k]
          dp[i + 1][j + g][pp] = dp[i + 1][j + g][pp] % mod
        }
      }
    }
  }
  let res = 0
  for (let j = 0; j <= n; j++) {
    res = (res + dp[m][j][minProfit]) % mod
  }

  return res
}

function buildMatrix(dimensions, defaultVal) {
  if (dimensions.length === 1) return Array(dimensions[0]).fill(defaultVal)
  const res = []
  const [len, ...rest] = dimensions

  for (let i = 0; i < len; i++) {
    res.push(buildMatrix(rest, defaultVal))
  }

  return res
}

// another


/**
 * @param {number} G
 * @param {number} P
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
const profitableSchemes = function(G, P, group, profit) {
  const dp = Array.from({ length: P + 1 }, () => new Array(G + 1).fill(0))
  dp[0][0] = 1
  let res = 0,
    mod = 10 ** 9 + 7
  for (let k = 0; k < group.length; k++) {
    let g = group[k],
      p = profit[k]
    for (let i = P; i >= 0; i--)
      for (let j = G - g; j >= 0; j--)
        dp[Math.min(i + p, P)][j + g] =
          (dp[Math.min(i + p, P)][j + g] + dp[i][j]) % mod
  }
  for (let x of dp[P]) res = (res + x) % mod
  return res
}
