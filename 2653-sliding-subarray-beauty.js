/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const getSubarrayBeauty = function(nums, k, x) {
  let counter = Array(50).fill(0), ans = new Array(nums.length - k + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) counter[nums[i] + 50]++;
    if (i - k >= 0 && nums[i - k] < 0) counter[nums[i - k] + 50]--;
    if (i - k + 1 < 0) continue;
    let count = 0;
    for (let j = 0; j < 50; j++) {
      count += counter[j];
      if (count >= x) {
        ans[i - k + 1] = j - 50;
        break;
      }
    }
  }
  return ans;
};
