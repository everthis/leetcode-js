/**
 * @param {number[]} nums
 * @return {number}
 */
const subArrayRanges = function(nums) {
  const n = nums.length, { max, min } = Math
  let res = 0
  
  for(let i = 0; i < n; i++) {
    let [most, least] = [-Infinity, Infinity]
    for(let j = i; j < n; j++) {
      most = max(most, nums[j])
      least = min(least, nums[j])
      res += most - least     
    }
  }
  return res
};
