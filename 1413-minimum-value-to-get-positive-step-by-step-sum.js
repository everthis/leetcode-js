/**
 * @param {number[]} nums
 * @return {number}
 */
const minStartValue = function(nums) {
  let sum = 0, min = Infinity
  for(let e of nums) {
    sum += e
    min = Math.min(min, sum)
  }
  
  return min >= 0 ? 1 : -min + 1
};
