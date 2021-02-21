/**
 * @param {string} s
 * @return {string}
 */
const longestNiceSubstring = function(s) {
  let res = ''
  const n = s.length
  
  const arr = Array(26).fill(null)
  for(let i = 0; i < n - 1; i++) {
    for(let j = i + 1; j < n; j++) {
      const tmp = s.slice(i, j + 1)
      if(helper(tmp)) {
        if(tmp.length > res.length) res = tmp
      }
    }
  }
  
  
  return res
};

function helper(s) {
  const arr = Array(26).fill(null)
  const a = 'a'.charCodeAt(0), A = 'A'.charCodeAt(0)
  for(let e of s) {
    const ecode = e.charCodeAt(0)
    if(arr[ecode - a] === 0 || arr[ecode - A] === 0) continue
    if(ecode - a < 26 && ecode - a >= 0) arr[ecode - a] = arr[ecode - a] === 1 ? 0 : -1
    if(ecode - A < 26 && ecode - A >= 0) arr[ecode - A] = arr[ecode - A] === -1 ? 0 : 1
  }
  for(let e of arr) {
    if(e === -1 || e === 1) return false
  }
  
  return true
}
