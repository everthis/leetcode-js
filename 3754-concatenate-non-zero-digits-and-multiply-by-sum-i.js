/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
  const s = '' + n
  let x = '', sum = 0
  for(const e of s) {
    if(e === '0') continue
    else {
      x += e
      sum += +e
    }
  }
  x = +x

  return x * sum
};
