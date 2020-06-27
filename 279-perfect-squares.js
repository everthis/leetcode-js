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

// another

/**
 * @param {number} n
 * @return {number}
 */
const numSquares = function (n) {
  // Based on Lagrange's Four Square theorem, there
  // are only 4 possible results: 1, 2, 3, 4.
  // If n is a perfect square, return 1.
  if (is_square(n)) {
    return 1
  }
  // The result is 4 if and only if n can be written in the
  // form of 4^k*(8*m + 7). Please refer to
  // Legendre's three-square theorem.
  while ((n & 3) === 0) {
    // n%4 == 0
    n >>= 2
  }
  if ((n & 7) === 7) {
    // n%8 == 7
    return 4
  }
  // Check whether 2 is the result.
  let sqrt_n = Math.sqrt(n) >> 0
  for (let i = 1; i <= sqrt_n; i++) {
    if (is_square(n - i * i)) {
      return 2
    }
  }
  return 3
  function is_square(n) {
    const sqrt_n = Math.sqrt(n) >> 0
    return sqrt_n * sqrt_n == n
  }
}

