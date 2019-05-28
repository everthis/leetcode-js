/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
  const n = nums.length
  let xor =  0 ^ nums[0]
  for(let i = 1; i < n; i++) xor = xor ^ i ^ nums[i]
  return xor ^ n
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
  const len = nums.length;
  return (len * (len + 1)) / 2 - sum(nums);
};

function sum(arr) {
  return arr.reduce((ac, el) => ac + el, 0);
}
