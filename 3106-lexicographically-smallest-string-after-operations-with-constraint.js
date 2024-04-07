/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const getSmallestString = function(s, k) {
  const n = s.length
  s = s + s
  const a = 'a'.charCodeAt(0)
  let res = '', idx = 0
  for(let j = 0; j < n; j++) {
    for(let i = 0; i < 26; i++) {
      const len = chk(a + i, j)
      if(len === 0) {
         res += s[j]
         break
      } else if(len && len <= k) {
        k -= len
        res += String.fromCharCode(a + i)
        break
      }
    }
  }

    
  return res
  
  function chk(code, targetIdx) {
    const targetCode = s[targetIdx].charCodeAt(0)
    if(targetCode > code) {
          return Math.min(targetCode - code, code + 26 - targetCode)
    } else {
      return Math.min(code - targetCode, targetCode + 26 - code)
    }

  }
};
