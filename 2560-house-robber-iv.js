/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minCapability = function(nums, k) {
  let left = 1, right = 1e9, n = nums.length
  while (left < right) {
    let mid = Math.floor((left + right) / 2), take = 0
    for (let i = 0; i < n; ++i) {
      if (nums[i] <= mid) {
        take += 1
        i++
      } 
    }
    if (take >= k) right = mid
    else left = mid + 1
  }
  return left
};
