/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var absDifference = function(nums, k) {
    nums.sort((a, b) => a - b)
  let ma = 0, mi = 0
  const n = nums.length
  for(let i = 0; i < k; i++) {
    ma += nums[n - 1 - i]
    mi += nums[i]
  }

  return Math.abs(ma - mi)
};
