/**
 * @param {number} n
 * @return {number}
 */
const countNumbersWithUniqueDigits = function(n) {
  if (n === 0) return 1;
  let res = 10;
  let tmp = 9;
  let remainDigitNum = 9;
  while (n - 1 > 0 && remainDigitNum > 0) {
    tmp = tmp * remainDigitNum;
    res += tmp;
    n -= 1;
    remainDigitNum -= 1;
  }

  return res;
};
