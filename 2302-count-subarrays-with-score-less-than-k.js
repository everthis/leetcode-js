/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countSubarrays = function(nums, k) {
  let sum = 0
  let res = 0
  for(let i = 0, j = 0, n = nums.length; i < n; i++) {
    sum += nums[i]
    while(sum * (i - j + 1) >= k) sum -= nums[j++]
    res += i - j + 1
  }
  
  return res
};
