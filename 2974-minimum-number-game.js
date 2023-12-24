/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
  nums.sort((a, b) => a - b)
  const res = []
  for(let i = 0; i < nums.length - 1; i+=2) {
    const a = nums[i], b = nums[i + 1]
    res.push(b, a)
  }
  return res
};
