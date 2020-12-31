/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const largestSubarray = function(nums, k) {
  const n = nums.length
  const hi = n - k
  let start = Number.MIN_VALUE, idx = -1
  for(let i = 0; i <= hi; i++) {
    if(nums[i] > start) {
      start = nums[i]
      idx = i
    }
  }
  return nums.slice(idx, idx + k)
};
