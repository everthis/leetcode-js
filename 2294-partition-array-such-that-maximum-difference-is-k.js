/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
  nums.sort((a, b) => a - b)
  let res = 1, pre = nums[0], n = nums.length
  for(let i = 1; i < n; i++) {
    const cur = nums[i]
    if(cur - pre > k) {
      res++
      pre = cur
    }
  }
  
  return res
};
