/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumScore = function(nums, k) {
  const n = nums.length, {min, max} = Math
  let mini = nums[k];
  let ans = mini;
  let i = k;
  let j = k;

  while (i > 0 || j < n - 1) {
    if (i === 0 || (j + 1 < n && nums[i - 1] <= nums[j + 1])) {
      j++;
      mini = min(mini, nums[j]);
    } else {
      i--;
      mini = min(mini, nums[i]);
    }
    ans = max(ans, mini * (j - i + 1));
  }

  return ans;
};
