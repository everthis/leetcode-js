/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  let xor = nums[0]
  for(let i = 1; i< nums.length; i++) xor ^= nums[i]
  return xor
};
