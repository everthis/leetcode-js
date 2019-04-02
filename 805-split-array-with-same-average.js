/**
 * @param {number[]} A
 * @return {boolean}
 */
const splitArraySameAverage = function(A) {
  const totalSum = A.reduce((ac, el) => ac + el, 0)
  const len = A.length
  const mid = Math.floor(len / 2)
  A.sort((a, b) => b - a)
  for (let i = 1; i <= mid; i++) {
    if ((totalSum * i) % len === 0 && combinationSum(A, 0, i, (totalSum * i) / len)) return true
  }
  return false
}

function combinationSum(nums, idx, k, target) {
  if (target > k * nums[idx]) return false
  if (k === 0) return target === 0
  for (let i = idx; i < nums.length - k; i++) {
    if (nums[i] <= target && combinationSum(nums, i + 1, k - 1, target - nums[i])) return true
  }
  return false
}
