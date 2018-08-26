/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function(dividend, divisor) {
  if (!divisor || (dividend === Number.MIN_SAFE_INTEGER && divisor === -1)) {
    return Number.MAX_SAFE_INTEGER;
  }
  const MAX_INT = Math.pow(2, 31) - 1;
  if (dividend === -2147483648 && divisor === -1) return MAX_INT;

  const sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;
  let dvd = Math.abs(dividend);
  let dvs = Math.abs(divisor);
  let res = 0;

  while (dvd >= dvs) {
    let tmp = dvs;
    let multiple = 1;
    while (dvd >= tmp << 1 && tmp << 1 > 0) {
      tmp <<= 1;
      multiple <<= 1;
    }
    dvd -= tmp;
    res += multiple;
  }
  return sign === 1 ? res : -res;
};
