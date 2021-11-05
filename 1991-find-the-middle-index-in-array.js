/**
 * @param {number[]} nums
 * @return {number}
 */
const findMiddleIndex = function(nums) {
  const n = nums.length
  const sum = nums.reduce((ac, e) => ac + e, 0) 
  
  let res, leftSum = 0
  for(let i = 0; i < n; i++) {
    if(leftSum === sum - leftSum - nums[i]) {
      res = i
      break
    }
    leftSum += nums[i]
  }

  return res == null ? -1 : res
};
