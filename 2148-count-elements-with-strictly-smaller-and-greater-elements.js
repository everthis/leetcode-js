/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
  let min = Infinity, max = -Infinity
  for(let e of nums) {
    if(e > max) max = e
    if(e < min) min = e
  }
  let res = 0
  for(let e of nums) {
    if(e > min && e < max) res++
  }
  return res
};
