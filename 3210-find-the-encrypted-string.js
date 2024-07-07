/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
  const ss=s+s
  const n = s.length
  let res = ''
  for(let i = 0; i < n; i++) {
    const idx = (i + k) % n
    res += ss[idx]
  }
  
  return res
};
