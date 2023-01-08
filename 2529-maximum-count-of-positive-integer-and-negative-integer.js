/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
  let pos = 0, neg = 0
  
  for(const e of nums) {
    if(e > 0) pos++
    else if(e < 0) neg++
  }
  
  return Math.max(pos, neg)
};
