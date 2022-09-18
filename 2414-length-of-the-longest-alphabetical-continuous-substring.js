/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function(s) {
  let res = 1
  let tmp = 1
  const n = s.length
  let pre = s[0]
  for(let i = 1;i < n; i++) {
    const ch = s[i]
    if(ch.charCodeAt(0) - pre.charCodeAt(0) === 1) {
      tmp++
      pre = ch
      res = Math.max(res, tmp)
    } else {
      pre = ch
      tmp = 1
    }
  }
  
  return res
};
