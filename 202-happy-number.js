/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
  const arr = [];
  let tmp = n;
  while (arr.indexOf(tmp) === -1) {
    arr.push(tmp);
    let res = ("" + tmp)
      .split("")
      .reduce((ac, str) => ac + Math.pow(+str, 2), 0);
    if (res === 1) {
      return true;
    }
    tmp = res;
  }
  return false;
};
