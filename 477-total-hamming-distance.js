/**
 * @param {number[]} nums
 * @return {number}
 */
const totalHammingDistance = function(nums) {
  let total = 0,
    n = nums.length;
  for (let j = 0; j < 32; j++) {
    let bitCount = 0;
    for (let i = 0; i < n; i++) bitCount += (nums[i] >> j) & 1;
    total += bitCount * (n - bitCount);
  }
  return total;
};
