/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
  const n = nums.length, {max} = Math
  const left = Array(n).fill(0), right = Array(n).fill(0)
  for(let i = 0, ma = 0; i < n; i++) {
    ma = max(ma, nums[i])
    left[i] = ma
  }
  for(let i = n - 1, ma = 0; i >= 0; i--) {
    ma = max(ma, nums[i])
    right[i] = ma
  }
  let res = 0
  
  for(let i = 1; i < n - 1; i++) {
    res = max(res, (left[i - 1] - nums[i]) * right[i + 1] )
  }
  
  return res
};
