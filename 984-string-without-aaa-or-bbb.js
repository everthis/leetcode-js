/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
const strWithout3a3b = function(a, b) {
  let m = a, n = b, ch1 = 'a', ch2 = 'b'
  if(b > a) {
    m = b, n = a, ch1 = 'b', ch2 = 'a'
  }
  let res = ''
  while(m-- > 0) {
    res += ch1
    if(m > n) {
      res += ch1
      m--
    }
    if(n > 0) {
      res += ch2
      n--
    }
  }
  return res
};
