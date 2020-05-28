/**
 * @param {number[]} nums
 * @return {number}
 */
const maxValueAfterReverse = function (nums) {
  let minOfMaxPair = -Infinity
  let maxOfMinPair = Infinity
  let originalTotal = 0
  let maximumBenefit = 0
  for (let i = 1; i < nums.length; i++) {
    const [left, right] = [nums[i - 1], nums[i]]
    const diff = Math.abs(right - left)
    originalTotal += diff
    maximumBenefit = Math.max(
      maximumBenefit,
      Math.abs(right - nums[0]) - diff,
      Math.abs(left - nums[nums.length - 1]) - diff
    )
    minOfMaxPair = Math.max(minOfMaxPair, Math.min(left, right))
    maxOfMinPair = Math.min(maxOfMinPair, Math.max(left, right))
  }
  maximumBenefit = Math.max(maximumBenefit, 2 * (minOfMaxPair - maxOfMinPair))
  return originalTotal + maximumBenefit
}
