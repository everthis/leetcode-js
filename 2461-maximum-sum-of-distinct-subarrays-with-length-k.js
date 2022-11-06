/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumSubarraySum = function(nums, k) {
  let res = 0
  const n = nums.length
  
  const preSum = Array(n).fill(0)
  preSum[0] = nums[0]
  for(let i = 1; i < n; i++) {
    preSum[i] = preSum[i - 1] + nums[i]
  }
  
  const set = new Set()
  
  const lastHash = {}
  
  for(let i = 0; i < n; i++) {
    const cur = nums[i]
    lastHash[cur] = i
    if(i < k - 1) set.add(cur)
    else if(i === k - 1) {
      set.add(cur)
      if(set.size === k) {
        res = preSum[i]
      }
    } else {
      if(lastHash[nums[i - k]] == i - k) set.delete(nums[i - k])
      set.add(nums[i])
      if(set.size === k) {
        res = Math.max(res, preSum[i] - preSum[i - k])
      }
    }
  }
  
  return res
};
