/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {
  let output = 0
  const pick = function (nums, k) {
    if (nums.length > 0) {
      for (let i = 0; i < nums.length; i++) {
        output++
        let arr = nums.slice(i + 1)
        arr = arr.filter((e) => Math.abs(e - nums[i]) != k)
        pick(arr, k)
      }
    }
  }
  pick(nums, k)
  return output
}
