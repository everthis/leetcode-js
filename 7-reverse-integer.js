/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(num) {
  let negative = false;
  let result = 0;
  if (num < 0) {
    negative = true;
    num = Math.abs(num);
  }
  while (num > 0) {
    mod = num % 10; // mod = 3 // mod = 2 // mod
    num = Math.floor(num / 10); // num = 12 // num = 1
    result = result * 10 + mod; // 0 = 0 * 10 + 3 = 0 + 3 = 3 // 3 = 3 * 10 + 2 = 30 + 2 = 32
  }
  if (result > 2147483647) return 0;
  if (negative) return result * -1;
  return result;
};
