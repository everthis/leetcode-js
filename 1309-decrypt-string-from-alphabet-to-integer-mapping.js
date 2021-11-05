/**
 * @param {string} s
 * @return {string}
 */
const freqAlphabets = function(s) {
  const n = s.length, a = 'a'.charCodeAt(0) - 1
  let res = '', cur = '', num = 0

  for(let i = n - 1; i >= 0; i--) {
    const ch = s[i]
    if(cur === '') {
      if(ch === '#') {
        cur = ch
        num = 0
      } else{
        res = (String.fromCharCode(a + (+ch))) + res
      }
    } else {
      if (num < 1) {
        cur = ch + cur
        num++
      } else {
        cur = ch + cur
        const tmp = cur.slice(0,cur.length - 1)
        res = (String.fromCharCode(a + (+tmp))) + res
        cur = ''
        num = 0
      }
    }
  }
  return res
};
