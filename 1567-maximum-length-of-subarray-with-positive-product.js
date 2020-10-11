/**
 * @param {number[]} nums
 * @return {number}
 */
const getMaxLen = function(nums) {
  let res = 0, zeroIdx = -1, negIdx = -1, count = 0
  for(let i = 0, len = nums.length; i < len; i++) {
    if(nums[i] < 0) {
      count++
      if(negIdx === -1) negIdx = i
    }
    if(nums[i] === 0) {
      count = 0
      negIdx = -1
      zeroIdx = i
    } else {
      if(count % 2 === 0) res = Math.max(res, i - zeroIdx)
      else res = Math.max(res, i - negIdx)
    }
  }
  
  return res
};
