/**
 * @param {number[]} nums
 * @return {number}
 */
const minimizeSum = function(nums) {
  nums.sort((a, b) => a - b)
  const { max, min, abs } = Math
  const res1 = nums.at(-1) - nums[2]
  const res2 = nums.at(-2) - nums[1]
  const res3 = nums.at(-3) - nums[0]
  return min(res1, res2, res3)
};
