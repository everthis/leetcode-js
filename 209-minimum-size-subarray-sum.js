/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function(s, nums) {
  if (!nums || nums.length === 0) return 0;
  const len = nums.length
  let left = 0, right = 0, result = +Infinity, sum = 0;
  while (right < len) {
    sum += nums[right];
    right++;
    while (sum >= s) {
      if (right - left < result) result = right - left;
      sum -= nums[left];
      left++;
    }
  }
  return result === +Infinity ? 0 : result;
};
