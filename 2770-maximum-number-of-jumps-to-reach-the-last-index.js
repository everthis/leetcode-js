/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maximumJumps = function(nums, target) {
  const n = nums.length
  const dp = Array(n).fill(-1)
  dp[0] = 0
  for(let i = 0; i < n; i++) {
    if(dp[i] === -1) continue
    for(let j = i + 1; j < n; j++) {
      if (nums[j] - nums[i] <= target && nums[j] - nums[i] >= -target) {
        dp[j] = Math.max(dp[j], dp[i] + 1)
      }
    }
  }
  
  return dp.at(-1)
};

