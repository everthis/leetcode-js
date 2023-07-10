/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkArray = function(nums, k) {
  let cur = 0
  let diff = Array(nums.length).fill(0)
  const n = nums.length
  for(let i = 0; i < n; i++) {
    if (nums[i] != cur) {
      diff[i] += nums[i] - cur
      if( (i + k - 1) >= n ) return false
      diff[i + k - 1] -= nums[i] - cur
    }
    if (nums[i] < cur) return false
    cur += diff[i]
  }
  return true  
};
