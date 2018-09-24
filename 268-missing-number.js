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
