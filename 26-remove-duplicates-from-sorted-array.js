/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;
  let pre = nums[0];
  for (let i = 1; i < nums.length; ) {
    if (nums[i] !== pre) {
      pre = nums[i];
      i += 1;
    } else {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};
