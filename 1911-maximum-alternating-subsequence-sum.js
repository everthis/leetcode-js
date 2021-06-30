/**
 * @param {number[]} nums
 * @return {number}
 */
const maxAlternatingSum = function(nums) {
  let odd = 0, even = 0;
  for (let a of nums) {
    even = Math.max(even, odd + a);
    odd = even - a;
  }
  return even;
};
