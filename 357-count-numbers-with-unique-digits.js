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


// another

/**
 * @param {number} n
 * @return {number}
 */
const countNumbersWithUniqueDigits = function(n) {
  const limit = 10 ** n
  let res = 1
  let m = 1
  if(n === 0) return 1
  while(10**m <= limit) {
    res += 9 * helper(9, m - 1)
    m++
  }
  
  return res
  
  function helper(m, n) {
    return n === 0 ? 1 : helper(m, n - 1) * (m - n + 1)
  }
};

// another

/**
 * @param {number} n
 * @return {number}
 */
const countNumbersWithUniqueDigits = function(n) {
  if(n === 0) return 1
  let res = 10
  let tmp = 9, digits = 9
  while(n > 1 && digits > 0) {
    tmp *= digits 
    res += tmp
    n--
    digits--
  }
  
  return res
};
