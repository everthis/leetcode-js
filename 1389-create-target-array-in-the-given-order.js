/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const createTargetArray = function(nums, index) {
  const res = [], n = nums.length
  for(let i = 0; i < n; i++) {
    if(res[index[i]] == null) res[index[i]] = nums[i]
    else res.splice(index[i], 0, nums[i])
    
  }
  
  return res
};
