/**
 * @param {number[]} nums
 * @param {number} K
 * @return {boolean}
 */
const canDivideIntoSubsequences = function (nums, K) {
  let cur = 1,
    groups = 1,
    n = nums.length
  for (let i = 1; i < n; ++i) {
    cur = nums[i - 1] < nums[i] ? 1 : cur + 1
    groups = Math.max(groups, cur)
  }
  return n >= K * groups
}
