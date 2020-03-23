/**
 * @param {number[]} nums
 * @return {boolean}
 */
const splitArray = function(nums) {
  if (nums.length < 7) return false
  const sum = new Array(nums.length).fill(0)
  sum[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i]
  }
  for (let j = 3; j < nums.length - 3; j++) {
    const set = new Set()
    for (let i = 1; i < j - 1; i++) {
      if (sum[i - 1] == sum[j - 1] - sum[i]) set.add(sum[i - 1])
    }
    for (let k = j + 2; k < nums.length - 1; k++) {
      if (
        sum[nums.length - 1] - sum[k] == sum[k - 1] - sum[j] &&
        set.has(sum[k - 1] - sum[j])
      )
        return true
    }
  }
  return false
}
