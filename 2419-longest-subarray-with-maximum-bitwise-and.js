/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = function(nums) {
  const max = Math.max(...nums)
  const arr = []
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === max) arr.push(i)
  }
  let res = 1, cur = 1
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] - arr[i - 1] === 1) cur++
    else {
      cur = 1
    }
    
    res = Math.max(res, cur)
  }
  
  return res
};
