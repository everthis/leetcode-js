/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const smallestRangeI = function(nums, k) {
  let min = Infinity, max = -Infinity
  for(let e of nums) {
    min = Math.min(min, e)
    max = Math.max(max, e)
  }
  return max - k >= min + k ? max - k - (min + k) : 0
};
