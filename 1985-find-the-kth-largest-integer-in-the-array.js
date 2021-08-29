/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
const kthLargestNumber = function(nums, k) {
  nums.sort((a, b) => BigInt(b) - BigInt(a) === 0n ? 0 : (BigInt(b) - BigInt(a) > 0n ? 1 : -1) )
  return nums[k - 1]
};
