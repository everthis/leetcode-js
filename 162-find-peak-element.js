/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function(nums) {
  if(nums == null) return -1
  const len = nums.length
  if(len === 1) return 0
  for(let i = 1; i < len; i++) {
    if(i === 1 && nums[i] < nums[i - 1]) return 0
    else if(i === len - 1 && nums[i] > nums[i - 1]) return len - 1
    else if(nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) return i
  }
  return -1
};
