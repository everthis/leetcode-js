/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function(nums) {
  let i = 0;
  while (true) {
    if (nums[i] == nums[i + 1]) {
      i += 2;
    } else {
      return nums[i];
    }
  }
};
