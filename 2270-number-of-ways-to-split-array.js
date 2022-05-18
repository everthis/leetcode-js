/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
  let res = 0, sum = 0
  const n = nums.length
  if(n === 0) return res
  const pre = Array(n).fill(0)
  pre[0] = nums[0]
  sum += nums[0]
  for(let i = 1; i < n; i++) {
    pre[i] = nums[i] + pre[i - 1]
    sum += nums[i]
  }
  for(let i = 0; i < n - 1; i++) {
    if(pre[i] >= sum - pre[i]) res++
  }
  
  return res
};
