/**
 * @param {string} S
 * @return {string}
 */
const removeOuterParentheses = function(S) {
    let onum = 0
    let oidx = 0
    let cnum = 0
    let cidx = 0
    let res = ''
    const arr = S.split('')
    for(let i = 0, len = S.length; i < len; i++) {
      if(S[i] === '(') onum++
      if(S[i] === ')') cnum++
      if(onum === cnum) {
        res += arr.slice(oidx + 1, oidx + cnum * 2 - 1).join('')
        onum = 0
        cnum = 0
        oidx = i+1
      }
    }
    return res
};
