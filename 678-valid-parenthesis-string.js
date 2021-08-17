/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = function(s) {
    let lo = 0, hi = 0;
    for (let i = 0; i < s.length; i++) {
        lo += s[i] == '(' ? 1 : -1;
        hi += s[i] != ')' ? 1 : -1;
        if (hi < 0) break;
        lo = Math.max(lo, 0);
    }
    return lo === 0;
};

// another

/**
 * @param {string} s
 * @return {boolean}
 */
 const checkValidString = function (s) {
  let lo = 0, hi = 0 // 可能多余的‘(’
  for(let ch of s) {
    if(ch === '(') lo++, hi++
    if(ch === ')') {
      if(lo > 0) lo--
      hi--
    }
    if(ch === '*') {
      if(lo > 0) lo--
      hi++
    }
    if(hi < 0) return false
  }
  return lo === 0
}
