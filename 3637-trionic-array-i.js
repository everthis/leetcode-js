/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function (nums) {
  const n = nums.length
  if (n < 3) return false

  let i = 0

  while (i + 1 < n && nums[i] < nums[i + 1]) {
    i++
  }

  const p = i

  while (i + 1 < n && nums[i] > nums[i + 1]) {
    i++
  }

  const q = i

  while (i + 1 < n && nums[i] < nums[i + 1]) {
    i++
  }

  return p > 0 && p < q && q < n - 1 && i === n - 1
}
