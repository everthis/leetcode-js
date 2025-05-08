/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} numOperations
 * @return {number}
 */
var maxFrequency = function (nums, k, numOperations) {
  const n = nums.length
  let ans = 0,
    left = 0,
    right = 0
  nums.sort((a, b) => a - b)

  const count = {}
  for (const num of nums) {
    count[num] = (count[num] || 0) + 1
  }
  for (let mid = 0; mid < n; mid++) {
    while (nums[mid] - nums[left] > k) {
      left++
    }

    while (right < n - 1 && nums[right + 1] - nums[mid] <= k) {
      right++
    }

    const total = right - left + 1
    ans = Math.max(
      ans,
      Math.min(total - (count[nums[mid]] || 0), numOperations) +
        (count[nums[mid]] || 0),
    )
  }

  left = 0
  for (right = 0; right < n; right++) {
    let mid = Math.floor((nums[left] + nums[right]) / 2)

    while (mid - nums[left] > k || nums[right] - mid > k) {
      left++
      mid = Math.floor((nums[left] + nums[right]) / 2)
    }
    ans = Math.max(ans, Math.min(right - left + 1, numOperations))
  }

  return ans
}
