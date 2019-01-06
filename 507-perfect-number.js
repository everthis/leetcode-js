/**
 * @param {number} num
 * @return {boolean}
 */
const checkPerfectNumber = function(num) {
  if (num === 1) return false;
  return chk(num);
};

function chk(num) {
  let min = 2;
  let max = Math.ceil(Math.sqrt(num));
  const res = [1];
  for (let i = min; i <= max; i++) {
    if (Number.isInteger(num / i) && res.indexOf(i) === -1) {
      res.push(i, num / i);
    }
  }
  if (res.reduce((ac, el) => ac + el, 0) === num) {
    return true;
  } else {
    return false;
  }
}
