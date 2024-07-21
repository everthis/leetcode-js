/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number}
 */
var minimumOperations = function(nums, target) {
  if (nums.length !== target.length) {
    return -1
  }

  const diff = nums.map((num, i) => -num + target[i])

  let res = 0
  for (let i = 0; i < diff.length; i++) {
    if (i === 0 || diff[i] * diff[i - 1] <= 0) {
      res += Math.abs(diff[i])
    } else {
      res += Math.max(Math.abs(diff[i]) - Math.abs(diff[i - 1]), 0)
    }
  }

  return res
};
