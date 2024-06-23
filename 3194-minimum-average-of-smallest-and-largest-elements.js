/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
  nums.sort((a, b) => a - b)
  const arr = []
  let i = 0, j = nums.length - 1
  while(i < j) {
    let a = nums[i], b = nums[j]
    arr.push((a+b)/2)
    i++
    j--
  }
  return Math.min(...arr)
};
