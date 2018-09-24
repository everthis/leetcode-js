/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function(nums) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash.hasOwnProperty(nums[i])) {
      return nums[i];
    } else {
      hash[nums[i]] = 1;
    }
  }
};
