/**
 * @param {number[]} nums
 * @return {number[]}
 */
const distinctDifferenceArray = function(nums) {
  const res = []
  
  for(let i = 0, n = nums.length; i < n; i++) {
    const pre = nums.slice(0, i + 1), suf = nums.slice(i + 1)
    res[i] = new Set(pre).size - new Set(suf).size
  }
  
  return res
};
