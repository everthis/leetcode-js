/**
 * @param {number[]} nums
 * @return {number}
 */
const findGCD = function(nums) {
  let min = Math.min(...nums)
  let max = Math.max(...nums)
  return gcd(min, max)
};

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b)
}
