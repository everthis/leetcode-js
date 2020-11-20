/**
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {boolean}
 */
const canConvertString = function(s, t, k) {
  if(s == null || t == null) return false
  const slen = s.length, tlen = t.length
  if(slen !== tlen) return false
  const count = Array(26).fill(0)
  for(let i = 0; i < slen; i++) {
    const scode = s.charCodeAt(i)
    const tcode = t.charCodeAt(i)
    const diff = (tcode - scode + 26) % 26;
    if (diff > 0 && diff + count[diff] * 26 > k) {
      return false;
    }
    count[diff]++;
  }
  return true
};
