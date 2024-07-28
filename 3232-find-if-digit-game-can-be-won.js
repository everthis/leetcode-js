/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
  const sum = nums.reduce((ac, e) => ac + e, 0)
  let as = 0
  for(const e of nums) {
    if(e < 10) as += e
  }
  
  return as !== sum - as
};
