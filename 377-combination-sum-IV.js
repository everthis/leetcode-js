/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = function(nums, target) {
  const comb = [1];
  for (let i = 1; i <= target; i++) {
    comb[i] || (comb[i] = 0);
    for (let j = 0; j < nums.length; j++) {
      if (i >= nums[j]) {
        comb[i] += comb[i - nums[j]];
      }
    }
  }
  return comb[target];
};
