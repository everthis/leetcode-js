/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
  let res = [], tmp = ''
  for(let i = 0, n = s.length; i < n; i++) {
    tmp += s[i]
    if(tmp.length === k) {
      res.push(tmp)
      tmp = ''
    }
  }
  if(tmp.length) {
    for(let i = 0, limit = k - tmp.length; i < limit; i++) {
      tmp += fill
    }
    res.push(tmp)
  }
  return res
};
