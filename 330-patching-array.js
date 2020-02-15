/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
const minPatches = function(nums, n) {
  let answer = 0
  for (let i = 0, next = 1; next <= n; ) {
    if (i >= nums.length || nums[i] > next) {
      answer++
      next *= 2
    } else next += nums[i++]
  }
  return answer
}
