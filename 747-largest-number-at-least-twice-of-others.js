/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = function(nums) {
  let max = -Infinity
  let idx = -1
  for(let i = 0, len = nums.length; i < len; i++) {
    if(nums[i] > max) {
      max = nums[i]
      idx = i
    }
  }
  for(let i = 0, len = nums.length; i < len; i++) {
    if(nums[i] !== max && max < nums[i] * 2) return -1
  }
  return idx
};
