/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function (nums) {
  let operations = 0

  while (!isNonDecreasing(nums)) {
    let minSum = Infinity
    let idx = -1

    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] + nums[i + 1] < minSum) {
        minSum = nums[i] + nums[i + 1]
        idx = i
      }
    }

    const merged = nums[idx] + nums[idx + 1]
    nums = nums.slice(0, idx).concat([merged], nums.slice(idx + 2))

    operations += 1
  }

  return operations
  function isNonDecreasing(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false
      }
    }
    return true
  }
}
