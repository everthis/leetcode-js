/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
const getMinDistance = function(nums, target, start) {
  let min = Infinity, res = -1
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === target) {
      if(min > Math.abs(i - start)) {
        res = i
        min = Math.abs(i - start)
      }
    }
  }
  
  return min
  
};
