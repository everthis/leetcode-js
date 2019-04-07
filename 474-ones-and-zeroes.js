/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

const findMaxForm = function(strs, m, n) {
  const memo = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0))
  let numZeroes
  let numOnes

  for (let s of strs) {
    numZeroes = numOnes = 0
    // count number of zeroes and ones in current string
    for (let c of s) {
      if (c === '0') numZeroes++
      else if (c === '1') numOnes++
    }
    // memo[i][j] = the max number of strings that can be formed with i 0's and j 1's
    // from the first few strings up to the current string s
    // Catch: have to go from bottom right to top left
    // Why? If a cell in the memo is updated(because s is selected),
    // we should be adding 1 to memo[i][j] from the previous iteration (when we were not considering s)
    // If we go from top left to bottom right, we would be using results from this iteration => overcounting
    for (let i = m; i >= numZeroes; i--) {
      for (let j = n; j >= numOnes; j--) {
        memo[i][j] = Math.max(memo[i][j], memo[i - numZeroes][j - numOnes] + 1)
      }
    }
  }
  return memo[m][n]
}
