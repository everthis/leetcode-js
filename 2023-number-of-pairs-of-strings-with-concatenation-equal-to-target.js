/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
const numOfPairs = function(nums, target) {
  let res = 0
  
  const n = nums.length
  for(let i = 0; i < n; i++) {
      for(let j = 0; j < n; j++) {
          if(i !== j && nums[i] + nums[j] === target) res++
      }
  }
  
  return res
};
