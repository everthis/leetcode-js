/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const maxNonOverlapping = function(nums, target) {
  if(nums == null || nums.length === 0) return 0
  let sum = 0, res = 0
  const n = nums.length
  const m = {0: 0}
  
  for(let i = 0; i < n; i++) {
    sum += nums[i]
    if(m[sum - target] != null) {
      res = Math.max(res, m[sum - target] + 1)
    }
    m[sum] = res
  }
  return res
};
