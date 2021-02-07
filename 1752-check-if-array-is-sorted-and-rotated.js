/**
 * @param {number[]} nums
 * @return {boolean}
 */
const check = function(nums) {
  let prev = -1, mark = 0
  for(let e of nums) {
    
    if(e >= prev) prev = e
    else {
      mark++
      prev = e
    }
    if(mark > 1) return false
  }
  if(mark === 1 && nums[0] < nums[nums.length - 1]) {
      return false
  }
  return true
};
