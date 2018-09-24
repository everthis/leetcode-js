/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves = function(nums) {
  let min = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
    sum += nums[i];
  }
  return sum - min * nums.length;
};
