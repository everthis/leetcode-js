/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(nums) {
  const n = nums.length
  for(let i = 0; i < n; i++) {
    if(i % 10 === nums[i]) return i
  }
  return -1
};
