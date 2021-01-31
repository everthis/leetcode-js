/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
const countBalls = function(lowLimit, highLimit) {
  const m = {}
  for(let i = lowLimit; i <= highLimit; i++) {
    const tmp = (i + '').split('').map(e => +e).reduce((ac, e) => ac + e, 0)
    if(m[tmp] == null) m[tmp] = 0
    m[tmp]++
  }
  const arr = Object.values(m)
  arr.sort((a, b) => b - a)
  return arr[0]
};
