/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSelectedElements = function (nums) {
  let dp = new Uint32Array(1e6 + 2)
  let n = nums.length
  nums.sort((a, b) => a - b)

  dp.fill(0, 0, nums[n - 1] + 1)
  let res = 1
  for (let i = 0; i < n; ++i) {
    let x = nums[i]
    dp[x + 1] = dp[x] + 1
    dp[x] = dp[x - 1] + 1
    res = Math.max(res, dp[x], dp[x + 1])
  }

  return res
}
