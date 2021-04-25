/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxFrequency = function(nums, k) {
  let res = 1, i = 0, j = 0, sum = 0
  const n = nums.length
  nums.sort((a, b) => a - b)
  for(j = 0; j < n; j++) {
    sum += nums[j]
    while(sum + k < (j - i + 1)  * nums[j]) {
      sum -= nums[i]
      i++
    }
    res = Math.max(res, j - i + 1)
  } 
  return res
};
