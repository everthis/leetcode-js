/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
  if (nums.every(num => num < 0)) {
    return Math.max(...nums)
  }
  return Array.from(new Set(nums)).filter(num => num > 0).reduce((acc, num) => acc + num, 0)

};
