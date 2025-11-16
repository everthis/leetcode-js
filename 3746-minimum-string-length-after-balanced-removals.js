/**
 * @param {string} s
 * @return {number}
 */
var minLengthAfterRemovals = function(s) {
  let a = 0, b = 0
  const n = s.length
  let res = n
  for(let i = 0; i < n; i++) {
    const e = s[i]
    if(e === 'a') a++
    else if(e === 'b') b++
    if(a > 0 && b > 0) {
      const tmp = Math.min(a, b)
      a -= tmp
      b -= tmp
      res -= tmp * 2
    }
  }
  return res
};
