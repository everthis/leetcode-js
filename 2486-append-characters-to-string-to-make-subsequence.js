/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
  let i =  0, j = 0
  const m = s.length, n = t.length
  while(i < m && j < n) {
    if(s[i] === t[j]) {
      i++
      j++
    } else {
      i++
    }
  }
  
  return n - 1 - (j - 1)
};
