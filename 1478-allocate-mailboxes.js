/**
 * @param {number[]} houses
 * @param {number} k
 * @return {number}
 */
const minDistance = function (A, K) {
  A.sort((a, b) => a - b)
  let n = A.length,
    B = new Array(n + 1).fill(0),
    dp = Array(n).fill(0)
  for (let i = 0; i < n; ++i) {
    B[i + 1] = B[i] + A[i]
    dp[i] = 1e6
  }
  for (let k = 1; k <= K; ++k) {
    for (let j = n - 1; j > k - 2; --j) {
      for (let i = k - 2; i < j; ++i) {
        let m1 = ((i + j + 1) / 2) >> 0,
          m2 = ((i + j + 2) / 2) >> 0
        let last = B[j + 1] - B[m2] - (B[m1 + 1] - B[i + 1])
        dp[j] = Math.min(dp[j], (i >= 0 ? dp[i] : 0) + last)
      }
    }
  }
  return dp[n - 1]
}

// another

/**
 * @param {number[]} houses
 * @param {number} k
 * @return {number}
 */
function minDistance(houses, k) {
  const n = houses.length, { abs, min } = Math, INF = Infinity
  houses.sort((a, b) => a - b)
  const costs = Array.from({ length: 100 }, () => Array(100).fill(0))
  const memo = Array.from({ length: 100 }, () => Array(100).fill(null))

  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      const mid = houses[~~((i + j) >> 1)]
      for (let k = i; k <= j; k++) costs[i][j] += abs(mid - houses[k])
    }
  }
  
  return dp(k, 0)

  function dp(k, i) {
    if (k === 0 && i === n) return 0
    if (k === 0 || i === n) return INF
    if (memo[k][i] != null) return memo[k][i]
    let res = INF
    for (let j = i; j < n; j++) {
      res = min(res, costs[i][j] + dp(k - 1, j + 1))
    }

    return memo[k][i] = res
  }
}

