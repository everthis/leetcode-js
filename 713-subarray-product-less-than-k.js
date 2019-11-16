/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numSubarrayProductLessThanK = function(nums, k) {
  if (k == 0) return 0
  let cnt = 0
  let pro = 1
  for (let i = 0, j = 0, len = nums.length; j < len; j++) {
    pro *= nums[j]
    while (i <= j && pro >= k) {
      pro /= nums[i++]
    }
    cnt += j - i + 1
  }
  return cnt
}
