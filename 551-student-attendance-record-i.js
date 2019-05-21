/**
 * @param {string} s
 * @return {boolean}
 */
const checkRecord = function(s) {
  let anum = 0
  let plidx = -1
  for(let i = 0, len = s.length; i < len; i++) {
    if(s[i] === 'A') anum++
    if(anum > 1) return false
    if(s[i] === 'L') {
      if(i === 0) plidx = 0
      else if(s[i - 1] === 'L') {
        if(i - plidx + 1 > 2) return false
      } else {
        plidx = i
      }
    }
  }
  return true
};
