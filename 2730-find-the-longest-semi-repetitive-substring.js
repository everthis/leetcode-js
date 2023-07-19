/**
 * @param {string} s
 * @return {number}
 */
const longestSemiRepetitiveSubstring = function(s) {
  let res = 1
  let i = 0, j = 1, last = 0
  while(j <  s.length) {
    if(s[j] === s[j - 1]) {
      if(last) i = last
      last = j
    }
    
    res = Math.max(res, j - i + 1)
    j++
  }
  
  return res
};
