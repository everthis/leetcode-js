/**
 * @param {number[]} nums
 * @return {boolean}
 */
const xorGame = function(nums) {
  const xor = nums.reduce((xor,ele) => xor^ele, 0)
  return xor === 0 || (nums.length & 1) === 0
};
