/**
 * @param {number[]} nums
 * @return {number}
 */
const maxAscendingSum = function(nums) {
  let res = -Infinity
  
  const n = nums.length
  let cur = 0
  for(let i = 0; i < n; i++) {
    if(i === 0) cur = nums[i]
    if(i > 0) {
      if(nums[i] > nums[i - 1]) {
        cur += nums[i]
        res = Math.max(res, cur)
      } else {
        res = Math.max(res, cur)
        cur = nums[i]
      } 
    }
  }
  res = Math.max(res, cur)  
  return res
};
