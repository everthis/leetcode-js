/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function(nums) {
  let n = nums.length;
  let l = 0;
  while (nums[l + 1] > nums[l]) ++l;
  if (l + 1 == n) return (n * (n + 1)) / 2;

  let res = l + 2;
  let r = n;
  do {
    --r;
    while (l >= 0 && nums[l] >= nums[r]) --l;
    res += l + 2
  }
  while (nums[r] > nums[r-1])

  return res;
};
