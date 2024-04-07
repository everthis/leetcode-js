/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
  const n = nums.length
  return Math.max(inc(), desc()) 
    
  function inc() {
    let res = 1, cur = 1
    for(let i = 1; i < n; i++) {
      if(nums[i] > nums[i - 1]) {
        cur++
        res = Math.max(res, cur)
      } else {
        cur = 1
      }
    }
    
    return res
  }
  
  function desc() {
    let res = 1, cur = 1
    for(let i = 1; i < n; i++) {
      if(nums[i] < nums[i - 1]) {
        cur++
        res = Math.max(res, cur)
      } else {
        cur = 1
      }
    }
    
    return res
  }
};
