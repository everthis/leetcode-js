/**
 * @param {number[]} nums
 * @return {number[]}
 */
const rearrangeArray = function(nums) {
  nums.sort((a, b) => a - b)
  const res = []
  let idx = 0, i = 0
  const n = ~~((nums.length + 1) / 2)
  while(i < nums.length) {
    if(idx >= nums.length) idx = 1
    // console.log(idx,i)
    res[idx] = nums[i]
    
    idx += 2
    i++
  }
  
  return res
};
