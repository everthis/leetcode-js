/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
const addOperators = function(num, target) {
  let res = [];
  let n = num.length;
  function recursive(k, str, add, mul, last) {
    let sum = add + mul * last;
    if (k === n) {
      if (sum === target) {
        res.push(str);
      }
      return;
    }
    let x = num[k] - "0";
    if (last !== 0) {
      recursive(k + 1, str + num[k], add, mul, last * 10 + x);
    }
    recursive(k + 1, str + "*" + num[k], add, mul * last, x);
    recursive(k + 1, str + "+" + num[k], sum, 1, x);
    recursive(k + 1, str + "-" + num[k], sum, -1, x);
  }
  if (n) recursive(1, num[0], 0, 1, num[0] - "0");
  return res;
};
