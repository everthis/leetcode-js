/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function(nums, target) {
  let len = nums.length;
  let start = 0;
  let end = len - 1;
  let res = [];
  let idx;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target === nums[mid]) {
      idx = mid;
      break;
    } else if (target < nums[mid]) end = mid - 1;
    else start = mid + 1;
  }
  if (idx == null) return [-1, -1];
  let li = idx;
  let hi = idx;
  while (nums[li - 1] === target) {
    li--;
  }
  while (nums[hi + 1] === target) {
    hi++;
  }
  res = [li, hi];
  return res;
};
