/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function(nums, target) {
  let len = nums.length;
  let start = 0;
  let end = len > 0 ? len - 1 : 0;

  let res = [];
  let idx;
  if (len === 0) return [-1, -1];
  if (len === 1) {
    if (target === nums[0]) {
      return [0, 0];
    } else {
      return [-1, -1];
    }
  }
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target === nums[mid]) {
      idx = mid;
      break;
    }
    if (target < nums[mid]) end = mid - 1;
    if (target > nums[mid]) start = mid + 1;
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
