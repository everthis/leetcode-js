/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfDigits = function(nums) {
  let min = Math.min(...nums);
  let ans = 0;
  while (min > 0) {
      ans += min % 10;
      min = ~~(min / 10);
  }
  return 1 - ans % 2;
};
