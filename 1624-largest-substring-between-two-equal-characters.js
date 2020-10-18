/**
 * @param {string} s
 * @return {number}
 */
const maxLengthBetweenEqualCharacters = function(s) {
  const m = {}
  if(s ==null || s.length <= 1) return -1
  let res  = -1
  for(let i = 0, len = s.length; i< len;i++) {
    if(m[s[i]] != null) {
      res = Math.max(res, i - m[s[i]] - 1)
    } else {
      m[s[i]] = i
    }
    
  }
  return res
};
