/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
  let res = '', j = 0, idx = spaces[j]
  for(let i = 0, n = s.length; i < n; i++) {
    if(i === idx) {
      res += ' '
      j++
      idx = spaces[j]
    }
    res += s[i]
  }
  
  return res
};
