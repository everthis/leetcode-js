/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function(s) {
  const arr = s.split('')
  const n = arr.length
  for(let i = 1; i < n; i++) {
    const valid = +arr[i] % 2 === +arr[i - 1] % 2
    if(valid && (+arr[i] < +arr[i - 1])) {
      ;[arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
      return arr.join('')
    }
  }
  return s
};
