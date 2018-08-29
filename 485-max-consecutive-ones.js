/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function(nums) {
  let sum = 0,
    max = 0;

  for (let i = 0; i < nums.length; i++) {
    let temp = sum;
    sum += nums[i];
    if (temp === sum || i === nums.length - 1) {
      max = Math.max(sum, max);
      sum = 0;
    }
  }

  return max;
};
