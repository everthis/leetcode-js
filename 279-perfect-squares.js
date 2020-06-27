/**
 * @param {number} n
 * @return {number}
 */
const numSquares = function(n) {
    const dp = new Array(n+1).fill(Number.MAX_VALUE)
    dp[0] = 0
    for(let i = 1; i <= n; i++) {
        let min = Number.MAX_VALUE
        let j = 1
        while(i - j*j >= 0) {
            min = Math.min(min, dp[i-j*j] + 1)
            ++j
        }
        dp[i] = min
    }
    return dp[n]
};

// another

/**
 * @param {number} n
 * @return {number}
 */
const numSquares = function (n) {
  if (n <= 0) return 0
  // cntPerfectSquares[i] = the least number of perfect square numbers
  const cntPerfectSquares = [0]
  // While cntPerfectSquares.length <= n, we need to incrementally
  // calculate the next result until we get the result for n.
  while (cntPerfectSquares.length <= n) {
    const m = cntPerfectSquares.length
    let cntSquares = Number.MAX_VALUE
    for (let i = 1; i * i <= m; i++) {
      cntSquares = Math.min(cntSquares, cntPerfectSquares[m - i * i] + 1)
    }
    cntPerfectSquares.push(cntSquares)
  }
  return cntPerfectSquares[n]
}
