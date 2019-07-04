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
