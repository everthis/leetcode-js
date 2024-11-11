/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function (nums, k) {
  const n = nums.length

  for (let i = 0; i <= n - 2 * k; ++i) {
    let firstIncreasing = true
    let secondIncreasing = true

    for (let j = i; j < i + k - 1; ++j) {
      if (nums[j] >= nums[j + 1]) {
        firstIncreasing = false
        break
      }
    }

    if (!firstIncreasing) continue

    for (let j = i + k; j < i + 2 * k - 1; ++j) {
      if (nums[j] >= nums[j + 1]) {
        secondIncreasing = false
        break
      }
    }

    if (firstIncreasing && secondIncreasing) return true
  }

  return false
}
