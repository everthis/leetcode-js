/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
const maximumScore = function(nums, multipliers) {
  const n = nums.length, m = multipliers.length
  const { max } = Math
  const dp = Array.from({ length: m + 1 }, () => Array(m + 1).fill(-Infinity))
  return helper(0, 0)
  function helper(l, i) {
    if(i === m) return 0
    if(dp[l][i] !== -Infinity) return dp[l][i]
    const pickLeft = helper(l + 1, i + 1) + nums[l] * multipliers[i]
    const pickRight = helper(l, i + 1) + nums[n - (i - l) - 1] * multipliers[i]
    return dp[l][i] = max(pickLeft, pickRight)
  }

};
