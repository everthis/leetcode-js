/**
 * @param {number[]} nums
 * @return {number[]}
 */
const decompressRLElist = function(nums) {
  const res = []
  for(let i = 0, n = nums.length; i < n - 1; i += 2) {
    const [freq, val] = [nums[i], nums[i + 1]]
    for(let j = 0; j < freq; j++) res.push(val)
  } 
  
  return res
};
