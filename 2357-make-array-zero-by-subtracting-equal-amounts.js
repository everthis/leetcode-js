/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumOperations = function(nums) {
  
  let res = 0
  
  while(!allZero(nums)) {
    const sub = minNonZero(nums)
    nums = nums.map(e => e - sub)
    
    res++
  }
  
  return res
  
  function minNonZero(arr) {
    let res = 0
    const f = arr.filter(e => e > 0)
    
    
    return Math.min(...f)
  }
  
  function allZero(arr) {
    for(const e of arr) {
      if(e > 0) return false
    }
    return true
  }
};
