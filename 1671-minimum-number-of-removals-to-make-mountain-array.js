/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumMountainRemovals = function (nums) {
  if (nums.length <= 3) return 0
  const n = nums.length
  const inc = Array(n).fill(0)
  const dec = Array(n).fill(0)
  const { max, min } = Math
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) inc[i] = max(inc[i], inc[j] + 1)
    }
  }
  for (let i = n - 2; i >= 0; i--) {
    for (let j = n - 1; j > i; j--) {
      if (nums[i] > nums[j]) dec[i] = max(dec[i], dec[j] + 1)
    }
  }
  let res = 0
  for (let i = 0; i < n; i++) {
    if (inc[i] > 0 && dec[i] > 0) res = max(res, inc[i] + dec[i])
  }
  return n - res - 1
}
