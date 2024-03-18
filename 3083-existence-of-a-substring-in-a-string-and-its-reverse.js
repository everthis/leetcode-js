/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function(s) {
  let res = false
  const n = s.length
  for(let i = 0; i < n - 1; i++) {
    const e = s[i] + s[i + 1]
    for(let j = n - 1; j > 0; j--) {
      if(s[j] === s[i] && s[j - 1] === s[i + 1]) {
        res = true
        return res
      }
    }
  }
  
  return res
};
