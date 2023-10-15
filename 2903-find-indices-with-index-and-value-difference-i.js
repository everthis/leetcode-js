/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function(nums, indexDifference, valueDifference) {
  let res = [-1, -1]
  const {abs} = Math, n = nums.length
  for(let i = 0; i < n; i++) {
    for(let j = i; j < n; j++) {
      if(abs(i - j) >= indexDifference && abs(nums[i] - nums[j]) >= valueDifference) {
        res = [i, j]
      }
    }
  }
  
  
  return res
};
