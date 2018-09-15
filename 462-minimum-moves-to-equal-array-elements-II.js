/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves2 = function(nums) {
  nums.sort((a, b) => a - b);
  let i = 0,
    j = nums.length - 1;
  let res = 0;
  while (i < j) {
    res += nums[j] - nums[i];
    i++;
    j--;
  }
  return res;
};
