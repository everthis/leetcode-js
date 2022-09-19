/**
 * @param {number} n
 * @return {number}
 */
const twoEggDrop = function (n) {
  const dp = Array(n + 1).fill(0)

  helper(n)
// console.log(dp)
  return dp[n]

  function helper(k) {
    if(k === 0) return 0
    if (dp[k] === 0) {
      for (let i = 1; i <= k; i++) {
        dp[k] = Math.min(
          dp[k] === 0 ? k : dp[k],
          1 + Math.max(i - 1, helper(k - i))
        )
      }
    }
    return dp[k]
  }
}
