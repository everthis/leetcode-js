/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function(n, k) {
  const s = num2bin(n)
  const t = num2bin(k)
  let res = 0
  const len = s.length
  
  for(let i = 0; i < len; i++) {
    const e = s[i], e1 = t[i]
    if(e !== e1) {
      if(e === '1') {
        res++
      } else {
        return -1
      }
    }
  }
  
  return res
};

function num2bin(n) {
  let tmp = (n >>> 0).toString(2)
  if(tmp.length < 32) {
    return '0'.repeat(32 - tmp.length) + tmp
  }
  
  return tmp
}
