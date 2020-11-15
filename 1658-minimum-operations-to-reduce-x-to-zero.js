/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
const minOperations = function (nums, x) {
  let l = 0,
    r = nums.length - 1;
  while (x >= 0 && r >= l) {
    x -= nums[r];
    r -= 1;
  }
  if (r < 0 && x > 0) {
    return -1;
  } else if (r < 0 && x == 0) {
    return nums.length;
  }

  let ans = Number.MAX_VALUE;
  while (r < nums.length) {
    while (x <= 0 && r + 1 < nums.length) {
      if (x == 0) ans = Math.min(ans, nums.length - (r - l + 1));
      x += nums[r + 1];
      r += 1;
    }
    if (r + 1 >= nums.length) {
      if (x == 0) ans = Math.min(ans, nums.length - (r - l + 1));
      break;
    }
    while (x >= 0) {
      if (x == 0) ans = Math.min(ans, nums.length - (r - l + 1));
      x -= nums[l];
      l += 1;
    }
  }
  return ans != Number.MAX_VALUE ? ans : -1;
};
