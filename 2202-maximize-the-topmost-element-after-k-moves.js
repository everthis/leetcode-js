/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumTop = function(nums, k) {
  const n = nums.length
  if(k === 0) return n >= 1 ? nums[0] : -1
  if(k === 1) return n === 1 ? -1 : nums[1]
  if(n === 1) return k % 2 === 0 ? nums[0] : -1
  const tmp = nums.slice(0, Math.min(k - 1, n))
  let res = Math.max(...tmp)
  if(k < n) res = Math.max(res, nums[k])
  return res  
};
