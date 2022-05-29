/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
  const a = 'a'.charCodeAt(0), arr = Array(26).fill(0)
  for(let ch of target) {
    arr[ch.charCodeAt(0) - a]++
  }
  let min = Math.min(...arr.filter(e => e > 0))
  const sa = Array(26).fill(0)
  for(const e of s) {
    sa[e.charCodeAt(0) - a]++
  }
  let res = -1
  for(let i = 0; i < 26; i++) {
    const sv = sa[i], tv = arr[i]
    if(tv === 0) continue
    const v = ~~(sv / tv)
    if(res === -1) res = v
    else res = Math.min(res, v)
  }
  
  return res
};
