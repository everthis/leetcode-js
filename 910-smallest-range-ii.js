/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const smallestRangeII = function (nums, k) {
  let n = nums.length
  nums.sort((a, b) => a - b)
  // all elements plus k or minus k
  let res = nums[n - 1] - nums[0]

  // left side elements plus k, right side elements minus k
  let left = nums[0] + k, right = nums[n - 1] - k
  for(let i = 0; i < n - 1; i++) {
    const tmax = Math.max(right, nums[i] + k)
    const tmin = Math.min(left, nums[i + 1] - k)
    res = Math.min(res, tmax - tmin)
  }

  return res
}
